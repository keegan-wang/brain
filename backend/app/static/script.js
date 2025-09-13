const $ = (s)=>document.querySelector(s);
const sceneEl = $('#scene-json');
const mappingEl = $('#mapping-json');
const summaryEl = $('#summary-json');
const btnAnalyze = document.getElementById('btn-analyze');
const btnAnalyzeStream = document.getElementById('btn-analyze-stream');
const btnMap = document.getElementById('btn-map');
const btnGptBrain = document.getElementById('btn-gpt-brain');
const btnAggregate = document.getElementById('btn-aggregate');
const filesMulti = document.getElementById('files-multi');

async function post(path, body){
  const res = await fetch(path, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{})});
  if(!res.ok) throw new Error(await res.text());
  return res.json();
}
async function get(path){
  const res = await fetch(path);
  if(!res.ok) throw new Error(await res.text());
  return res.json();
}

function setBusy(isBusy){
  if(btnAnalyze) btnAnalyze.disabled = isBusy;
  if(btnAnalyzeStream) btnAnalyzeStream.disabled = isBusy;
  if(btnMap) btnMap.disabled = isBusy;
  if(btnGptBrain) btnGptBrain.disabled = isBusy;
  if(btnAggregate) btnAggregate.disabled = isBusy;
}

// image preview
const fileInput = document.getElementById('file');
if(fileInput){
  fileInput.addEventListener('change', ()=>{
    const img = document.getElementById('preview');
    const f = fileInput.files && fileInput.files[0];
    if(!f){ img.style.display='none'; return; }
    const url = URL.createObjectURL(f);
    img.src = url;
    img.style.display = 'block';
  });
}

$('#btn-analyze').addEventListener('click', async ()=>{
  try{
    setBusy(true);
    const platform = $('#platform').value;
    const userId = document.getElementById('user-id-analyze')?.value || 'demo';
    const f = fileInput && fileInput.files && fileInput.files[0];
    let image_base64 = null;
    let image_mime = null;
    if(f){
      const buf = await f.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let binary = '';
      for(let i=0;i<bytes.length;i++){ binary += String.fromCharCode(bytes[i]); }
      image_base64 = btoa(binary);
      image_mime = f.type || null;
    }
    const analyzeResp = await post('/analyze/scene', { device_meta:{ platform }, user_id: userId, image_base64, image_mime });
    sceneEl.textContent = JSON.stringify(analyzeResp, null, 2);
    // Immediately map after analyze completes
    const body = { scene_json: analyzeResp.scene_json };
    const mapResp = await post('/map/domains', body);
    mappingEl.textContent = JSON.stringify(mapResp, null, 2);
    if(mapResp && mapResp.domain_scores){ drawDonut(mapResp.domain_scores); }
    // Call brain mapping with image for OpenAI
    const brainResp = await post('/map/brain', { scene_json: analyzeResp.scene_json, image_base64, image_mime });
    if(brainResp && brainResp.brain_scores_100){
      $('#brain-json').textContent = JSON.stringify(brainResp.brain_scores_100, null, 2);
      colorBrain(brainResp.brain_scores_100);
    }
  }catch(e){ sceneEl.textContent = 'Error: '+e; }
  finally{ setBusy(false); }
});

$('#btn-analyze-stream').addEventListener('click', async ()=>{
  setBusy(true);
  const platform = $('#platform').value;
  const userId = document.getElementById('user-id-analyze')?.value || 'demo';
  const f = fileInput && fileInput.files && fileInput.files[0];
  let image_base64 = null;
  let image_mime = null;
  if(f){
    const buf = await f.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = '';
    for(let i=0;i<bytes.length;i++){ binary += String.fromCharCode(bytes[i]); }
    image_base64 = btoa(binary);
    image_mime = f.type || null;
  }
  const logEl = document.getElementById('stream-log');
  logEl.textContent = '';
  const ws = new WebSocket(`ws://${location.host}/ws/analyze`);
  ws.onopen = ()=>{
    ws.send(JSON.stringify({ device_meta:{ platform }, user_id: userId, image_base64, image_mime }));
  };
  ws.onmessage = (ev)=>{
    try{
      const msg = JSON.parse(ev.data);
      if(msg.type === 'status'){
        logEl.textContent += `[${msg.stage}] ${msg.detail}\n`;
      }else if(msg.type === 'result'){
        sceneEl.textContent = JSON.stringify({ scene_json: msg.scene_json }, null, 2);
        mappingEl.textContent = JSON.stringify(msg.mapping, null, 2);
        if(msg.mapping && msg.mapping.domain_scores){
          drawDonut(msg.mapping.domain_scores);
        }
        if(msg.brain_scores_100){
          $('#brain-json').textContent = JSON.stringify(msg.brain_scores_100, null, 2);
          colorBrain(msg.brain_scores_100);
        }
        setBusy(false);
      }else if(msg.type === 'error'){
        logEl.textContent += `Error: ${msg.message}\n`;
        setBusy(false);
      }
    }catch(e){
      logEl.textContent += `Parse error: ${e}\n`;
    }
  };
  ws.onerror = ()=>{ logEl.textContent += 'WebSocket error\n'; setBusy(false); };
  ws.onclose = ()=>{ logEl.textContent += 'Stream closed\n'; setBusy(false); };
});

$('#btn-map').addEventListener('click', async ()=>{
  try{
    const parsed = JSON.parse(sceneEl.textContent||'{}');
    const body = { scene_json: parsed.scene_json || parsed };
    const data = await post('/map/domains', body);
    mappingEl.textContent = JSON.stringify(data, null, 2);
    drawDonut(data.domain_scores);
  }catch(e){ mappingEl.textContent = 'Error: '+e; }
});

// GPT Brain button: call /map/brain with current scene + file image
if(btnGptBrain){
  btnGptBrain.addEventListener('click', async ()=>{
    try{
      setBusy(true);
      $('#brain-status').textContent = 'Requesting GPT brain scores...';
      const parsed = JSON.parse(sceneEl.textContent||'{}');
      const scene_json = parsed.scene_json || parsed;
      // get last uploaded image as base64 if available
      const f = fileInput && fileInput.files && fileInput.files[0];
      let image_base64 = null;
      let image_mime = null;
      if(f){
        const buf = await f.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = '';
        for(let i=0;i<bytes.length;i++){ binary += String.fromCharCode(bytes[i]); }
        image_base64 = btoa(binary);
        image_mime = f.type || null;
      }
      const resp = await post('/map/all', { scene_json, image_base64, image_mime });
      if(resp){
        $('#gpt-full-json').textContent = JSON.stringify(resp, null, 2);
        if(resp.mapping){
          mappingEl.textContent = JSON.stringify(resp.mapping, null, 2);
        }
        if(resp.brain_scores_100){
          $('#brain-json').textContent = JSON.stringify(resp.brain_scores_100, null, 2);
          colorBrain(resp.brain_scores_100);
        }
        $('#brain-status').textContent = 'GPT mapping + brain scores received.';
      }else{
        $('#brain-status').textContent = 'No brain scores returned.';
      }
    }catch(e){
      $('#brain-status').textContent = 'Error: '+e;
      $('#brain-json').textContent = '';
    }finally{ setBusy(false); }
  });
}

// Aggregate multi-image
if(btnAggregate){
  if(filesMulti){
    filesMulti.addEventListener('change', ()=>{
      const files = filesMulti.files;
      const container = $('#hours-list');
      container.textContent = '';
      const ul = document.createElement('ul');
      for(let i=0;i<files.length;i++){
        const li = document.createElement('li');
        const label = document.createElement('span');
        label.textContent = files[i].name + ' — hours: ';
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.step = '0.25';
        input.value = '1';
        input.dataset.index = String(i);
        li.appendChild(label);
        li.appendChild(input);
        ul.appendChild(li);
      }
      container.appendChild(ul);
    });
  }
  btnAggregate.addEventListener('click', async ()=>{
    try{
      setBusy(true);
      $('#agg-status').textContent = 'Aggregating with GPT...';
      const files = filesMulti.files;
      const items = [];
      for(let i=0;i<files.length;i++){
        const f = files[i];
        const buf = await f.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = '';
        for(let j=0;j<bytes.length;j++){ binary += String.fromCharCode(bytes[j]); }
        const image_base64 = btoa(binary);
        const image_mime = f.type || null;
        const hoursInput = document.querySelector(`#hours-list input[data-index="${i}"]`);
        const hours = hoursInput ? parseFloat(hoursInput.value||'1') : 1;
        items.push({ scene_json: null, image_base64, image_mime, hours });
      }
      const resp = await post('/map/aggregate', { items });
      if(resp){
        $('#agg-per').textContent = JSON.stringify(resp.per_image_brain_scores_100, null, 2);
        $('#agg-out').textContent = JSON.stringify(resp.aggregate_scores_100, null, 2);
        $('#agg-summary').textContent = resp.summary || '';
        colorBrain(resp.aggregate_scores_100);
        $('#agg-status').textContent = 'Aggregation complete.';
      }else{
        $('#agg-status').textContent = 'No response.';
      }
    }catch(e){
      $('#agg-status').textContent = 'Error: '+e;
    }finally{ setBusy(false); }
  });
}

$('#btn-summary').addEventListener('click', async ()=>{
  try{
    const d = $('#date').value || new Date().toISOString().slice(0,10);
    const user = $('#user-id').value || 'demo';
    const data = await get(`/summary/daily?date=${encodeURIComponent(d)}&user_id=${encodeURIComponent(user)}`);
    summaryEl.textContent = JSON.stringify(data, null, 2);
  }catch(e){ summaryEl.textContent = 'Error: '+e; }
});

function drawDonut(scores){
  const canvas = document.getElementById('donut');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const labels = ['VIS','LAN','SOC','MOT','EXEC','REW'];
  const colors = ['#7aa2f7','#a7c7ff','#8bd5ca','#f5a97f','#c6a0f6','#f7768e'];
  const values = labels.map(l=>Math.max(0, Math.min(1, (scores[l]||0))));
  const sum = values.reduce((a,b)=>a+b,0) || 1;
  const cx = canvas.width/2, cy = canvas.height/2, r = Math.min(cx,cy)-8;
  let start = -Math.PI/2;
  values.forEach((v,i)=>{
    const angle = (v/sum)*Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,start,start+angle);
    ctx.fillStyle = colors[i];
    ctx.fill();
    start += angle;
  });
  // inner cutout
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(cx,cy,r*0.6,0,Math.PI*2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  // legend
  const legendX = 8, legendY = 8; let y = legendY;
  labels.forEach((l,i)=>{
    ctx.fillStyle = colors[i];
    ctx.fillRect(legendX,y,10,10);
    ctx.fillStyle = '#e6edf3';
    ctx.fillText(`${l}: ${values[i].toFixed(2)}`, legendX+16, y+10);
    y += 16;
  });
}

// set default date
$('#date').value = new Date().toISOString().slice(0,10);

// Brain coloring
function colorBrain(scores){
  const svg = document.getElementById('brain-svg');
  if(!svg || !scores) return;
  const min = 1, max = 100;
  function scoreToColor(s){
    const v = Math.max(min, Math.min(max, s));
    const t = (v - min) / (max - min); // 0..1
    // interpolate from #1a2433 (low) to #f7768e (high)
    const c1 = [0x1a,0x24,0x33];
    const c2 = [0xf7,0x76,0x8e];
    const c = c1.map((a,i)=>Math.round(a + t*(c2[i]-a)));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }
  Object.entries(scores).forEach(([key,val])=>{
    const el = svg.querySelector(`#${CSS.escape(key)}`);
    if(el){
      el.setAttribute('fill', scoreToColor(val));
      el.setAttribute('opacity', '0.95');
      el.setAttribute('stroke', '#223047');
    }
  });
}
