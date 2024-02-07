import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExchangeInfo from './components/ExchangeInfo';
import ExchangeDetails from './components/ExchangeDetails';
import NavBar from './components/Navbar';

const App =() => {
  //will store exchange data
  const [exchanges, setExchanges] = useState([]);

  //this will fetch data from exchange.json as side effect
  useEffect(() => {
    fetch('/exchange.json')
      .then(response => response.json())
      .then(data => {
        //exchange data is extracted here
        const exchangeData = data.hits.hits.map(item => item._source);
        console.log(exchangeData)
        //the state is updated with this exchange data
        setExchanges(exchangeData);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);


  return (
    <Router>
      {/*navigation bar is rendered*/}
      <NavBar />
        <Routes>
          {/* path to render the intial details of exchange data */}
          <Route path="/" element={<ExchangeInfo exchanges={exchanges} />} />
          {/* it renders details after the view details click */}
          <Route path="exchange/:exchangeId" element={<ExchangeDetails exchanges={exchanges} />} />
        </Routes>
    </Router>
  );
}

export default App;
