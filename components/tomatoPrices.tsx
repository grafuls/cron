import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import useSWR from 'swr';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

type TomatoPrice = {
  timestamp: string;
  price: number;
};

export default function TomatoPrices() {
  const chartRef = useRef<Line>(null);

  const { data } = useSWR(`/api/all/`, (url) =>
    fetch(url).then((res) => res.json())
  )

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chartInstance){
        chartRef.current.chartInstance.update();
      }
    }
  });

  if (data) {
    const chartData = {
      labels: data.map((item) => item.timestamp),
      datasets: [
        {
          label: 'Precio del tomate',
          data: data.map((item) => item.price),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    return <Line ref={chartRef} data={chartData} />;

  } else {
    return <div />;
  }

};
