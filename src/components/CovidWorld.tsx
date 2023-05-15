//Global COVID-19 Data Using-- World wide data of cases

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const initialState = {
  cases: 0,
  deaths: 0,
  recovered: 0,
};

const CovidWorld = () => {
  const [globalData, setGlobalData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        setGlobalData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const chartLabels = ['Cases', 'Deaths', 'Recovered'];
  const chartData = [
    globalData.cases,
    globalData.deaths,
    globalData.recovered,
  ];

  const chartConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Global COVID-19 Data',
        data: chartData,
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Global COVID-19 Data Using-- World wide data of cases</h2>
      <Bar data={chartConfig} />
    </div>
  );
};

export default CovidWorld;
