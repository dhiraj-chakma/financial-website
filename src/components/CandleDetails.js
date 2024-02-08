import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CandleDetails = ({ candles }) => {
  let { symbol } = useParams();
  const candle = candles.find(c => c.symbol === symbol);

  if (!candle) {
    return <div>Candle data not found.</div>;
  }

  
  const data = [
    {
      name: 'Price',
      startPrice: candle.startPrice,
      highestPrice: candle.highestPrice,
      lowestPrice: candle.lowestPrice,
      endPrice: candle.endPrice,
    },
  ];

  return (
    <div>
      <h2>Candle Details for {candle.symbol}</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="startPrice" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="highestPrice" stroke="#82ca9d" />
        <Line type="monotone" dataKey="lowestPrice" stroke="#ffc658" />
        <Line type="monotone" dataKey="endPrice" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default CandleDetails;
