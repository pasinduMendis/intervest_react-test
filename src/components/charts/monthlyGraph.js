/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as Chartjs,BarElement,CategoryScale,LinearScale, Tooltip,Legend} from "chart.js"
Chartjs.register(
  BarElement,CategoryScale,LinearScale, Tooltip,Legend
)


const LineChart = ({dataArry}) => {
  const [chardata,setChartdata]=useState({
    labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5'], // Add your dates here
    datasets: [
      {
        label: 'High Value',
        data: [], // Add your high values here
        fill: false,
        backgroundColor: '#694BDB',
        tension: 0.4,
      },
      {
        label: 'Low Value',
        data:[], // Add your low values here
        fill: false,
        backgroundColor: '#2BEBC8',
        tension: 0.4,
      },
      
    ],
  })

  useEffect(() => {
    setChartdata({
      labels: ['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5'], // Add your dates here
      datasets: [
        {
          label: 'High Value',
          data: dataArry.map((item)=>{return item.h}), // Add your high values here
          fill: false,
          backgroundColor: '#694BDB',
          tension: 0.4,
        },
        {
          label: 'Low Value',
          data:dataArry.map((item)=>{return item.l}), // Add your low values here
          fill: false,
          backgroundColor: '#2BEBC8',
          tension: 0.4,
        },
        
      ],
    })
    }, [dataArry])
  
  const options = {
   
  };


  return (

    <Bar data={chardata} options={options}/>
  )
};

export default LineChart;
