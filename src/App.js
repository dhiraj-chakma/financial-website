import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExchangeInfo from "./components/ExchangeInfo/ExchangeInfo";
import ExchangeDetails from "./components/ExchangeInfo/ExchangeDetails";
import InstrumentsList from "./components/InstrumentList/InstrumentsList";
import InstrumentDetails from "./components/InstrumentList/InstrumentDetails";
import CandleList from "./components/CandleList/CandleList";
import CandleDetails from "./components/CandleList/CandleDetails";
import NavBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // exchange data is stored here
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    fetch("/exchange.json")
      .then((response) => response.json())
      .then((data) => {
        // Extracting exchange data from the response and updating state
        const exchangeData = data.hits.hits.map((item) => item._source);
        setExchanges(exchangeData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // State to store instruments metadata
  const [instruments, setInstrument] = useState([]);

  useEffect(() => {
    fetch("/metadata.json")
      .then((response) => response.json())
      .then((data) => {
        // source has all the necessary data
        const instrumentData = data.hits.hits.map((item) => item._source);
        setInstrument(instrumentData);
      })
      .catch((error) => console.error("Error fetching metadata: ", error));
  }, []);

  // State to store candles data, structured by symbols
  const [candles, setCandles] = useState({});

  useEffect(() => {
    fetch("/candle.json")
      .then((response) => response.json())
      .then((data) => {
        // i added index becuase when grouped its difficult for react to differentiate since they all use same symbol in a group
        const aggregatedCandleData = data.hits.hits.reduce(
          (acc, { _source }, index) => {
            const { symbol } = _source;
            //if for the first time there is no group with this symbol then create one
            if (!acc[symbol]) {
              acc[symbol] = { data: [], id: index };
            }
            //otherwise just push the data to existing accumulator object
            acc[symbol].data.push(_source);
            return acc;
          },
          {}
        );

        setCandles(aggregatedCandleData);
      })
      .catch((error) => console.error("Error fetching candle data:", error));
  }, []);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ExchangeInfo exchanges={exchanges} />} />
          <Route path="exchange/:exchangeId" element={<ExchangeDetails exchanges={exchanges} />} />
          <Route path="/instruments" element={<InstrumentsList instruments={instruments} />} />
          <Route path="/instruments/:instrumentSymbol" element={<InstrumentDetails instruments={instruments} />} />
          <Route path="/candles" element={<CandleList candles={candles} />} />
          <Route path="/candles/:symbol" element={<CandleDetails candles={candles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
