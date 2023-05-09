import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import useSWR from 'swr';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

export default function TomatoPrices() {

  const { data } = useSWR(`/api/all/`, (url) =>
    fetch(url).then((res) => res.json())
  )

  if (data) {
    const chartData = {
      labels: data.map((item: { timestamp: string; }) => item.timestamp),
      datasets: [
        {
          label: 'Precio del tomate',
          data: data.map((item: { price: number; }) => item.price),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    return <Line data={chartData} />;

  } else {
    return <div />;
  }

};
