import React, {  useRef} from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import  useSleep  from '../services/useSleep';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function WeeklyGraph({...props}) {
 
  const sleeps = props.graphSleep.current

  
  const graphData = Object.values(sleeps)

  const {calculatedHoursSlept} = useSleep()

  const sleepData = useRef([])
  const days = useRef([])

  
  let dummy = []
  let dummyDays = []
  
  const getSleepData = () =>{
   

    graphData.forEach(data =>{
    
      let hoursAndDaySlept = calculatedHoursSlept([data[0],data[1]])
      dummyDays.push(data[2])
      console.log(dummyDays)
      dummy.push(hoursAndDaySlept)
      
    })
    sleepData.current = dummy
    days.current = dummyDays
  }
 
  getSleepData()


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales:{
      y:{
        beginAtZero: true
      },
    },
  };
  
  const labels = days.current;
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map((e,i) => sleepData.current[i]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <Line options={options} data={data}/>
  )
}

export default WeeklyGraph