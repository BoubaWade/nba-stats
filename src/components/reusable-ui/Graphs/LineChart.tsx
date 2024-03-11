import * as d3 from "d3";
import { useRef, useEffect, useState } from "react";

type LineProps = {
  data: number[];
  statName: string;
  className: string;
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
};

export default function LineChart({
  data,
  statName,
  className,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: LineProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const containerWidth = svgRef.current.parentElement?.clientWidth || 0;
        const width = containerWidth - marginLeft - marginRight;
        const height = 300;

        setDimensions({ width, height });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [marginLeft, marginRight]);

  const x = d3
    .scaleLinear()
    .domain([1, data.length])
    .range([0, dimensions.width]);

  const y = d3
    .scaleLinear()
    .domain(d3.extent(data) as [number, number])
    .range([dimensions.height - marginBottom, marginTop]);

  const line = d3.line((_, i) => x(i + 1), y);

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
          <path
            fill="none"
            stroke="#191e2d"
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
                fill="#c3ac81"
                stroke="black"
                strokeWidth="1"
              />
              <text
                x={x(hoveredPoint)}
                y={y(data[hoveredPoint]) - 15}
                textAnchor="middle"
                fill="black"
              >
                {`Match ${hoveredPoint + 1} ; ${
                  data[hoveredPoint]
                } ${statName}`}
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
