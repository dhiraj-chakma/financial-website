import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CandleList.module.css";

const CandleList = ({ candles }) => {
  const navigate = useNavigate(); // Hook for navigation

  // as ususal when clicked anywhere in the row take to the chart of each company
  const handleRowClick = (symbol) => {
    navigate(`/candles/${symbol}`);
  };

  return (
    <div className={styles.candleListContainer}>
      <h2>Candle Data</h2>
      <table className={styles.candleTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over candles object, creating a row for each symbol */}
          {Object.keys(candles).map((symbol, index) => (
            <tr
              key={index} // used index as key. i know its not advisable but here is the catch. the data here is grouped so in one group all has same symbol and i cant use it because its not unique anymore and leads to problem. so i give each group one id
              className={styles.candleRow}
              onClick={() => handleRowClick(symbol)} // when clicked call the callback func
            >
              <td>{symbol}</td> {/* Display the symbol */}
              <td>View Details</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandleList;
