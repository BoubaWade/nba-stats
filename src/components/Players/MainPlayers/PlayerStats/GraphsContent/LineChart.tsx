import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";

type LineProps = {
  data: number[];
  statName: string;
  className: string;
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export default function LineChart({
  data,
  statName,
  className,
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: LineProps) {
  const gx = useRef<SVGGElement | null>(null);
  const gy = useRef<SVGGElement | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const x = d3
    .scaleLinear()
    .domain([1, data.length])
    .range([marginLeft, width - marginRight]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(data) as [number, number])
    .range([height - marginBottom, marginTop]);

  const line = d3.line((_, i) => x(i + 1), y);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current).call(d3.axisBottom(x));
    }
  }, [gx, x]);

  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [gy, y]);

  return (
    <div className={className}>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
        <g ref={gy} transform={`translate(${marginLeft},0)`} />
        <path
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          d={line(data) || undefined}
        />
        <g fill="white" stroke="currentColor" strokeWidth="1.5">
          {data.map((d, i) => (
            <circle
              key={i}
              cx={x(i + 1)}
              cy={y(d)}
              r="2.5"
              onMouseOver={() => setHoveredPoint(i)}
              onMouseOut={() => setHoveredPoint(null)}
              cursor={"pointer"}
            />
          ))}
        </g>
        {hoveredPoint !== null && (
          <g>
            <rect
              x={x(hoveredPoint) - 100}
              y={y(data[hoveredPoint]) - 37.5}
              width={200}
              height={35}
              fill="white"
              stroke="black"
              strokeWidth="1"
            />
            <text
              x={x(hoveredPoint)}
              y={y(data[hoveredPoint]) - 15}
              textAnchor="middle"
              fill="black"
            >
              {`Match: ${hoveredPoint + 1} ; ${data[hoveredPoint]} ${statName}`}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
