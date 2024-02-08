import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InstrumentsList = ({ instruments }) => {
  const [filter, setFilter] = useState('');

  const filteredInstruments = instruments.filter(instrument =>
    instrument.name.toLowerCase().includes(filter.toLowerCase()) ||
    instrument.countryName.toLowerCase().includes(filter.toLowerCase()) ||
    instrument.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Instrument Details</h1>
      <ul>
        {filteredInstruments.map((instrument, index) => (
          <li key={index}>
            <Link to={`/instruments/${instrument.symbol}`}>{instrument.name} - {instrument.countryName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstrumentsList;
