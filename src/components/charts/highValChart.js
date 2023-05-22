/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as Chartjs,BarElement,CategoryScale,LinearScale, Tooltip,Legend} from "chart.js"
Chartjs.register(
  BarElement,CategoryScale,LinearScale, Tooltip,Legend
)


const HighVal = () => {
const chardata={
    labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5','Day-6'], // Add your dates here
    datasets: [
      {
        label: 'High Value',
        data: [10,12,6,23.11,20,11], // Add your high values here
        fill: false,
        backgroundColor: '#694BDB',
        tension: 0.4,
      },
      
    ],
  }
  
  const options = {
   
  };


  return (

    <Bar data={chardata} options={options}/>
  )
};

export default HighVal;
