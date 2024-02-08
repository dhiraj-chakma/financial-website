import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExchangeInfo from "./components/ExchangeInfo";
import ExchangeDetails from "./components/ExchangeDetails";
import InstrumentsList from "./components/InstrumentsList";
import InstrumentDetails from "./components/InstrumentDetails";
import CandleList from "./components/CandleList";
import CandleDetails from "./components/CandleDetails";
import NavBar from "./components/Navbar";

const App = () => {
  //will store exchange data
  const [exchanges, setExchanges] = useState([]);

  //this will fetch data from exchange.json as side effect
  useEffect(() => {
    fetch("/exchange.json")
      .then((response) => response.json())
      .then((data) => {
        //exchange data is extracted here
        const exchangeData = data.hits.hits.map((item) => item._source);
        //the state is updated with this exchange data
        setExchanges(exchangeData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Fetch metadata
  const [instruments, setInstrument] = useState([]);
  useEffect(() => {
    fetch("/metadata.json")
      .then((response) => response.json())
      .then((data) => {
        const instrumentData = data.hits.hits.map((item) => item._source);
        setInstrument(instrumentData);
      })
      .catch((error) => console.error("Error fetching metadata: ", error));
  }, []);

  const [candles, setCandles] = useState([]);

  useEffect(() => {
    fetch("/candle.json")
      .then((response) => response.json())
      .then((data) => {
        const candleData = data.hits.hits.map((item) => item._source);
        setCandles(candleData);
      })
      .catch((error) => console.error("Error fetching candle data:", error));
  }, []);

  return (
    <Router>
      {/*navigation bar is rendered*/}
      <NavBar />
      <Routes>
        {/* path to render the intial details of exchange data */}
        <Route path="/" element={<ExchangeInfo exchanges={exchanges} />} />
        {/* it renders details after the view details click */}
        <Route
          path="exchange/:exchangeId"
          element={<ExchangeDetails exchanges={exchanges} />}
        />
        <Route
          path="/instruments"
          element={<InstrumentsList instruments={instruments} />}
        />
        <Route
          path="/instruments/:instrumentSymbol"
          element={<InstrumentDetails instruments={instruments} />}
        />
        <Route path="/candles" element={<CandleList candles={candles} />} />
        <Route
          path="/candles/:symbol"
          element={<CandleDetails candles={candles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
