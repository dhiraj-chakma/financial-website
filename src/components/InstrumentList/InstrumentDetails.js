import React from "react";
import { useParams } from "react-router-dom";
import styles from "./InstrumentDetails.module.css";

const InstrumentDetails = ({ instruments }) => {
  let { instrumentSymbol } = useParams(); // with param hook symbol is extracted from url
  const instrument = instruments.find((inst) => inst.symbol === instrumentSymbol);

  if (!instrument) {
    return <div>Instrument not found.</div>; // if no instrument is there
  }

  return (
    <div className={styles.detailsBox}>
      <h2>Details for {instrument.name}</h2>
      {/* Instrument details */}
      <p>Symbol: {instrument.symbol}</p>
      <p>Type: {instrument.type}</p>
      <p>Country: {instrument.countryName}</p>
      <p>Exchange: {instrument.exchange}</p>
      <p>Currency: {instrument.currency}</p>
    </div>
  );
};

export default InstrumentDetails;
