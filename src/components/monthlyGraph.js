import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as Chartjs,BarElement,CategoryScale,LinearScale, Tooltip,Legend} from "chart.js"
Chartjs.register(
  BarElement,CategoryScale,LinearScale, Tooltip,Legend
)


const LineChart = () => {

  const data = {
    labels: ['2023-05-01', '2023-05-02', '2023-05-03', '2023-05-04', '2023-05-05'], // Add your dates here
    datasets: [
      {
        label: 'High Value',
        data: [23, 22, 25, 21, 24], // Add your high values here
        fill: false,
        backgroundColor: '#694BDB',
        tension: 0.4,
      },
      {
        label: 'Low Value',
        data: [15, 16, 14, 13, 15], // Add your low values here
        fill: false,
        backgroundColor: '#2BEBC8',
        tension: 0.4,
      },
      
    ],
  };
  
  const options = {
   
  };


  return (

    <Bar data={data} options={options}/>
  )
};

export default LineChart;
