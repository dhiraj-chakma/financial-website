import React from "react";
import { useParams } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./CandleDetails.module.css";

const CandleDetails = ({ candles }) => {
  // Retrieve the symbol from the URL parameters using useParams hook
  let { symbol } = useParams();
  // Access the candle data for the given symbol from the passed props; default to an empty array if not found
  const candleData = candles[symbol]?.data || [];

  const chartData = candleData.map((candle) => ({
    ...candle,
    dateTime: new Date(candle.dateTime).toLocaleDateString(),
  }));

  return (
    <div className={styles.candleCard}>
      <h2>Candle Chart for {symbol}</h2>
      {/* i used sameDataComposedChart from rechart link:https://recharts.org/en-US/examples/SameDataComposedChart */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart width={500} height={300} data={chartData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="dateTime" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Bar for start price */}
          <Bar dataKey="startPrice" barSize={20} fill="#413ea0" />
          {/* Line for end price */}
          <Line type="monotone" dataKey="endPrice" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandleDetails;
