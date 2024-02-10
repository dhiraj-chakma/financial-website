import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ExchangeDetails.module.css'

// it also accepts exchange array as props to provide details on a particular exchange
const ExchangeDetails = ({ exchanges })=> {
  //getting the exchnageId from the url
  let { exchangeId } = useParams();
  //the specific exchange is being searched using the unique id
  const exchange = exchanges.find(ex => ex.symbol === exchangeId);

  //if there is no exchange then show this
  if (!exchange) {
    return <div>Exchange not found</div>;
  }

  return (
    //details of the exchange
    <div className={styles.detailsBox}>
      <h2>{exchange.name}</h2>
      <p>Country: {exchange.country}</p>
      <p>Type: {exchange.type}</p>
      <p>Exchange: {exchange.nameExchange}</p>
      <p>Currency: {exchange.currency}</p>
    </div>
  );
}

export default ExchangeDetails;
