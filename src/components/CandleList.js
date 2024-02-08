import React from 'react';
import { Link } from 'react-router-dom';

const CandleList = ({ candles }) => {
  return (
    <div>
      <h2>Candle Data</h2>
      <ul>
        {candles.map((candle, index) => (
          <li key={index}>
            <Link to={`/candles/${candle.symbol}`}>{candle.symbol} - {new Date(candle.dateTime).toLocaleDateString()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandleList;
