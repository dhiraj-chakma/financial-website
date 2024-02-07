import React from "react";
import { Link } from "react-router-dom";

//it recieves exchanges as props from app.js which is an array of exchange objects
const ExchangeInfo = ({ exchanges })=> {
  return (
    <div>
      <h1>Exchange Information</h1>
      <ul>
        {/* exchange array is mapped to render each exchange as list */}
        {exchanges.map(exchange => (
          //exchange symbol is used as unique key as suggested in the task
          <li key={exchange.symbol}>
            <Link to={`/exchange/${exchange.symbol}`}>
              {exchange.name} - {exchange.country}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExchangeInfo;
