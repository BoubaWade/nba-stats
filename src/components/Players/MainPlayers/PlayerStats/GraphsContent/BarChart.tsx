import * as d3 from "d3";
import { useRef, useEffect } from "react";

type BarChartProps = {
  data: number[];
  className: string;
  width: number;
  height: number;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export default function BarChart({
  data,
  className,
  width,
  height,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: BarChartProps) {
  const gx = useRef<SVGGElement | null>(null);
  const gy = useRef<SVGGElement | null>(null);
  const x = d3
    .scaleBand()
    .domain(data.map((_, i) => i.toString()))
    .range([marginLeft, width - marginRight])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data) || 0])
    .nice()
    .range([height - marginBottom, marginTop]);

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
        {data.map((d, i) => (
          <rect
            key={i}
            x={x(i.toString()) || 0}
            y={y(d)}
            width={x.bandwidth()}
            height={height - marginBottom - y(d)}
            fill="steelblue"
          />
        ))}
      </svg>
    </div>
  );
}
