import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./InstrumentsList.module.css";

const InstrumentsList = ({ instruments }) => {
  const navigate = useNavigate(); // Hook for navigating

  // when clicked will navigate to details page
  const handleRowClick = (symbol) => {
    navigate(`/instruments/${symbol}`);
  };

  return (
    <div className={styles.container}>
      <h3>Financial Securities Information</h3>
      <p>
        Explore our comprehensive overview of global financial securities,
        spanning ETFs, ETCs, mutual funds, and stocks, each categorized by type,
        exchange, and trading currency. This data provides key insights into the
        diverse landscape of financial investment options available across major
        markets.
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
          {instruments.map((instrument) => (
            <tr
              key={instrument.symbol} // instrument's unique symbol is used as key
              className={styles.row}
              onClick={() => handleRowClick(instrument.symbol)}
            >
              <td className={styles.cell}>
                <Link
                  //this link takes to the details section for particular company
                  to={`/instruments/${instrument.symbol}`}
                  className={styles.link}
                >
                  {instrument.name}
                </Link>
              </td>
              <td className={styles.cell}>{instrument.countryName}</td>
              <td className={styles.cell}>{instrument.type}</td>
              <td className={styles.cell}>{instrument.exchange}</td>
              <td className={styles.cell}>{instrument.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstrumentsList;
