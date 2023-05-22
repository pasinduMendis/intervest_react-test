import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as Chartjs,ArcElement} from "chart.js"
Chartjs.register(
    ArcElement
)




const DoughnutChart = () => {
    
const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [120, 140, 100],
        backgroundColor: ['#2BEBC8', '#FF7777', '#694BDB'],
        hoverBackgroundColor: ['darkred', 'darkblue', 'goldenrod'],
      },
    ],
  };
  
  const options = {
    responsive: true,
    cutout:"80%",
  };

  return <Doughnut data={data} options={options} />
};

export default DoughnutChart;
