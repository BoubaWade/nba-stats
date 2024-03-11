import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface PieChartProps {
  data: { value: number; title: string }[];
}

export default function PieChart({ data }: PieChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 180;
    const height = 180;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
    const customColors = ["#d26f64", "#44a672"];
    const colorScale = d3.scaleOrdinal(customColors);
    const pie = d3
      .pie<{ value: number; title: string }>()
      .value((d) => d.value);
    const pieData = pie(data);
    const arc = d3
      .arc<d3.PieArcDatum<{ value: number; title: string }>>()
      .innerRadius(0)
      .outerRadius(radius);

    svg
      .selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (_, i) => colorScale(i.toString()))
      .attr("title", (d) => d.data.title)
      .on("mouseover", (event) => {
        const tooltip = d3.select(event.currentTarget);
        tooltip.transition().duration(200).attr("opacity", 0.9);
      })
      .on("mousemove", (event, d) => {
        const tooltip = d3.select(event.currentTarget);
        tooltip
          .html(`Value: ${d.data.value} - Title: ${d.data.title}`)
          .style("left", `${event.pageX}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", (event) => {
        const tooltip = d3.select(event.currentTarget);
        tooltip.transition().duration(200).attr("opacity", 0);
      });

    svg
      .selectAll("text")
      .data(pieData)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text((d) => d.data.value + "%")
      .style("fill", "white");
  }, [data]);

  return <svg ref={svgRef}></svg>;
}
