import { useState } from 'react';
import type { SceneJSON, MapAllResponse, AggregateBrainResponse, WSMessage } from '../types/api';

export function useAPI() {
  const [loading, setLoading] = useState(false);

  const post = async <T>(path: string, body: any): Promise<T> => {
    const res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {}),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  };

  const analyzeScene = async (data: {
    device_meta: { platform: string };
    user_id?: string;
    image_base64?: string;
    image_mime?: string;
  }) => {
    setLoading(true);
    try {
      return await post<{ scene_json: SceneJSON }>('/analyze/scene', data);
    } finally {
      setLoading(false);
    }
  };

  const mapAll = async (data: {
    scene_json: SceneJSON;
    image_base64?: string;
    image_mime?: string;
    hours?: number;
  }) => {
    setLoading(true);
    try {
      return await post<MapAllResponse>('/map/all', data);
    } finally {
      setLoading(false);
    }
  };

  const aggregateBrain = async (data: {
    items: Array<{
      scene_json?: SceneJSON;
      image_base64?: string;
      image_mime?: string;
      hours?: number;
    }>;
  }) => {
    setLoading(true);
    try {
      return await post<AggregateBrainResponse>('/map/aggregate', data);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    analyzeScene,
    mapAll,
    aggregateBrain,
  };
}

export function useWebSocket(url: string) {
  const [messages, setMessages] = useState<WSMessage[]>([]);
  const [connected, setConnected] = useState(false);

  const connect = (onMessage?: (msg: WSMessage) => void) => {
    const ws = new WebSocket(url);

    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);

    ws.onmessage = (ev) => {
      try {
        const msg: WSMessage = JSON.parse(ev.data);
        setMessages(prev => [...prev, msg]);
        onMessage?.(msg);
      } catch (e) {
        console.error('Failed to parse WS message:', e);
      }
    };

    return ws;
  };

  const clearMessages = () => setMessages([]);

  return {
    messages,
    connected,
    connect,
    clearMessages,
  };
}
