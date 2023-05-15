
//Graph data for cases with date:
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CovidGraph = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const historicalData = response.data;

        setData(historicalData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const chartData = {
  //   labels: Object.keys(data?.cases || {}),
  //   datasets: [
  //     {
  //       label: 'Cases',
  //       data: Object.values(data?.cases || {}),
  //       fill: false,
  //       borderColor: 'rgba(75,192,192,1)',
  //     },
  //     {
  //       label: 'Deaths',
  //       data: Object.values(data?.deaths || {}),
  //       fill: false,
  //       borderColor: 'rgba(255,0,0,1)',
  //     },
  //     data?.recovered && {
  //       label: 'Recovered',
  //       data: Object.values(data.recovered),
  //       fill: false,
  //       borderColor: 'rgba(0,128,0,1)',
  //     },
  //   ].filter(Boolean), // Filter out any undefined elements
  // };

  return (
    <div>
      <h2>COVID-19 Historical Data</h2>
      {/* <Line data={chartData} /> */}
    </div>
  );
};

export default CovidGraph;
