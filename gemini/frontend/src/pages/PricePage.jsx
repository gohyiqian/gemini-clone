import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";

const Price = () => {
  const [popularStock, setPopularStock] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    // const stocksURL = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=`;
    const stocksURL = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=01dc0027bd7c9d74f761d14c060c736f`;
    const getPopularStocks = async () => {
      // const res = await fetch(`${stocksURL}${process.env.REACT_APP_API_KEY}`);
      const res = await fetch(`${stocksURL}`);
      console.log(process.env.REACT_APP_API_KEY);
      console.log(res);
      if (res.ok) {
        const payload = await res.json();
        console.log(payload.mostActiveStock);
        setPopularStock(payload.mostActiveStock);
      }
    };
    getPopularStocks();
  }, []);

  return (
    <>
      <div className={`pricePage ${theme}`}>
        <h1>CryptoCurrency Prices</h1>
        <br />
        <table>
          <tr>
            <th>Crypto Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Circulation Supply</th>
          </tr>

          {popularStock.map((stock, index) => (
            <tr key={index}>
              <td>
                {" "}
                {stock.ticker} (
                <Link to={"/stock/" + stock.ticker}>{stock.companyName}</Link>)
              </td>{" "}
              <td>{stock.price}</td>
              <td
                style={
                  stock.changes > 0 ? { color: "green" } : { color: "red" }
                }
              >
                <strong>
                  {stock.changes} ({stock.changesPercentage}%)
                </strong>
              </td>
              <td>{stock.price}</td>
              <td>{stock.price}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Price;
