import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ExchangeInfo.module.css";

const ExchangeInfo = ({ exchanges }) => {
  const navigate = useNavigate();

  // when clicked anywhere in the row it will navigate to details
  const handleRowClick = (symbol) => {
    navigate(`/exchange/${symbol}`);
  };

  return (
    <div className={styles.container}>
      <h3>Today's Exchange Information</h3>
      <p>
        Discover the latest insights into our Market Securities Portfolio, featuring a curated selection of mutual funds, stocks, ETFs, and ETCs from prominent exchanges around the globe. This portfolio highlights key financial entities across diverse sectors and regions, showcasing opportunities for investment in the dynamic landscape of the global market.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
            <th>Exchange</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((exchange) => (
            <tr
              key={exchange.symbol} // symbol is used as key for each tr
              className={styles.row}
              onClick={() => handleRowClick(exchange.symbol)} // when clicked callback will call row click function and symbol is provided
            >
              <td className={styles.cell}>
                <Link to={`/exchange/${exchange.symbol}`} className={styles.link}>
                  {exchange.name}
                </Link>
              </td>
              <td className={styles.cell}>{exchange.country}</td>
              <td className={styles.cell}>{exchange.type}</td>
              <td className={styles.cell}>{exchange.nameExchange}</td>
              <td className={styles.cell}>{exchange.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeInfo;
