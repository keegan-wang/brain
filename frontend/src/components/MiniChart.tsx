interface MiniChartProps {
  data: Array<{time: string, value: number}>;
  color: string;
  height?: number;
}

export default function MiniChart({ data, color, height = 40 }: MiniChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  // Create smooth curve using SVG path with curves
  const createSmoothPath = (data: Array<{time: string, value: number}>) => {
    if (data.length === 0) return '';
    if (data.length === 1) {
      const x = 50;
      const y = ((maxValue - data[0].value) / range) * 100;
      return `M ${x},${y} L ${x},${y}`;
    }

    const points = data.map((point, index) => ({
      x: (index / (data.length - 1)) * 100,
      y: ((maxValue - point.value) / range) * 100
    }));

    let path = `M ${points[0].x},${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const current = points[i];

      // Create smooth curves using quadratic bezier curves
      if (i === 1) {
        // First curve
        const cp1x = prev.x + (current.x - prev.x) * 0.5;
        const cp1y = prev.y;
        path += ` Q ${cp1x},${cp1y} ${current.x},${current.y}`;
      } else {
        // Subsequent curves - use smoother control points
        const cp1x = prev.x + (current.x - prev.x) * 0.3;
        const cp1y = prev.y;
        const cp2x = prev.x + (current.x - prev.x) * 0.7;
        const cp2y = current.y;
        path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${current.x},${current.y}`;
      }
    }

    return path;
  };

  const smoothPath = createSmoothPath(data);

  // Also create points for the area fill (straight lines to the bottom)
  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = ((maxValue - point.value) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  const currentValue = data[data.length - 1]?.value || 0;
  const previousValue = data[data.length - 2]?.value || 0;
  const trend = currentValue - previousValue;

  return (
    <div className="relative">
      <svg
        width="100%"
        height={height}
        viewBox="0 0 100 100"
        className="w-full"
        preserveAspectRatio="none"
      >
        {/* Gradient background */}
        <defs>
          <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: color, stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: color, stopOpacity: 0.05}} />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill={`url(#gradient-${color.replace('#', '')})`}
        />

        {/* Smooth Line */}
        <path
          d={smoothPath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />

        {/* Current value dot */}
        {data.length > 0 && (
          <circle
            cx="100"
            cy={((maxValue - currentValue) / range) * 100}
            r="2"
            fill={color}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>

      {/* Stats overlay */}
      <div className="absolute top-0 right-0 text-xs">
        <span className="text-white font-medium">{currentValue}</span>
        {trend !== 0 && (
          <span className={`ml-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? '↗' : '↘'}
          </span>
        )}
      </div>
    </div>
  );
}
