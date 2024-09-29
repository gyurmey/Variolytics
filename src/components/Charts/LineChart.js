import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData, xtitle, ytitle }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: xtitle // Date 
              },
              beginAtZero: true // Optional 
            },
            y: {
              title: {
                display: true,
                text: ytitle  // Temperature (°C) 
              },
              beginAtZero: true // Optional 
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
