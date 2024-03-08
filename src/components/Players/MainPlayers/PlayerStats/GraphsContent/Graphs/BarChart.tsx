import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";

type BarChartProps = {
  data: number[];
  className: string;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export default function BarChart({
  data,
  className,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: BarChartProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const containerWidth = svgRef.current.parentElement?.clientWidth || 0;
        const width = containerWidth - marginRight - marginLeft;
        const height = 300;

        setDimensions({ width, height });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [marginRight, marginLeft]);

  const x = d3
    .scaleBand()
    .domain(data.map((_, i) => i.toString()))
    .range([0, dimensions.width])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data) || 0])
    .nice()
    .range([dimensions.height - marginBottom, marginTop]);

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current)
        .select<SVGGElement>(".x-axis")
        .call(d3.axisBottom(x));
    }
  }, [x]);

  useEffect(() => {
    if (svgRef.current) {
      d3.select(svgRef.current)
        .select<SVGGElement>(".y-axis")
        .call(d3.axisLeft(y));
    }
  }, [y]);

  return (
    <div className={className}>
      <svg width="100%" height={dimensions.height} ref={svgRef}>
        <g transform={`translate(${marginLeft},${marginTop})`}>
          <g
            className="x-axis"
            transform={`translate(0,${dimensions.height - marginBottom})`}
          />
          <g className="y-axis" />
          {data.map((d, i) => (
            <rect
              key={i}
              x={x(i.toString()) || 0}
              y={y(d)}
              width={x.bandwidth()}
              height={dimensions.height - marginBottom - y(d)}
              fill="rgb(25, 30, 45)"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
