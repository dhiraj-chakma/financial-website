import React from 'react';
import { useParams } from 'react-router-dom';

const InstrumentDetails = ({ instruments }) => {
  let { instrumentSymbol } = useParams();
  const instrument = instruments.find(inst => inst.symbol === instrumentSymbol);

  if (!instrument) {
    return <div>Instrument not found.</div>;
  }

  return (
    <div>
      <h2>Details for {instrument.name}</h2>
      <p>Symbol: {instrument.symbol}</p>
      <p>Type: {instrument.type}</p>
      <p>Country: {instrument.countryName}</p>
      <p>Exchange: {instrument.exchange}</p>
      <p>Currency: {instrument.currency}</p>
    </div>
  );
};

export default InstrumentDetails;
