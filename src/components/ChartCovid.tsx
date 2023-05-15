// COVID-19 Cases by Country: Worldwide data of cases 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
// import { Link } from "react-router-dom";

Chart.register(...registerables);

const ChartCovid = () => {
  // var arr;
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries/"
        );
        setCountryData(response.data);
        // const jsonData=JSON.stringify(countryData);
        //  arr=JSON.parse(jsonData);
        // console.log(typeof(arr));

        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  //   console.log(countryData);
  const chartLabels = countryData.map(
    (county: { country: any }) => county.country
  );
  const chartData = countryData.map((county: { cases: any }) => county.cases);
  // const chartData2 = countryData.map(country => country.deaths);

  const chartConfig = {
    labels: chartLabels,
    datasets: [
      {
        label: "COVID-19 Cases",
        data: chartData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>COVID-19 Cases by Country: Worldwide data of cases </h2>
      <Line data={chartConfig} />
      
    </div>
    
  );
};

export default ChartCovid;
