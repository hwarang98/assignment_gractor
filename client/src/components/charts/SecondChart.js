import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import "./SecondChart.css";

function SecondChart() {
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
          { value: 134, name: "정상" },
          { value: 32, name: "보통" },
          { value: 15, name: "주의" },
          { value: 2, name: "위험" },
          { value: 1, name: "고독사예지" },
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
    <div className="second-chart-container">
      <div className="second-chart" ref={chartRef}></div>;
    </div>
  );
}

export default SecondChart;
