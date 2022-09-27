import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import "./FirstChart.css";

function FirstChart() {
  const chartRef = useRef(null);
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },

        data: [
          { value: 76, name: "A 등급" },
          { value: 67, name: "B 등급" },
          { value: 54, name: "C 등급" },
          { value: 26, name: "D 등급" },
          { value: 18, name: " 등급" },
        ],
      },
    ],
  });

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      chart.setOption(options);
    }
  }, [options, chartRef]);

  return (
    <div className="first-chart-container">
      <div className="first-chart" ref={chartRef}></div>;
    </div>
  );
}

export default FirstChart;
