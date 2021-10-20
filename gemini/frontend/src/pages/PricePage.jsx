import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";

const Price = () => {
  const [popularCrypto, setPopularCrypto] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    // const stocksURL = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=`;
    const stocksURL = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=01dc0027bd7c9d74f761d14c060c736f`;
    const getPopularStocks = async () => {
      // const res = await fetch(`${stocksURL}${process.env.REACT_APP_API_KEY}`);
      const res = await fetch(`${stocksURL}`);
      if (res.ok) {
        const payload = await res.json();
        setPopularCrypto(payload.mostActiveStock);
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
          <thead>
            <tr>
              <th>Crypto Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>24h %</th>
              <th>Market Cap</th>
              <th>Circulation Supply</th>
            </tr>
          </thead>

          {popularCrypto.map((crypto, index) => (
            <tbody>
              <tr key={index}>
                <td>
                  {" "}
                  {crypto.ticker} (
                  <Link to={"/price/" + crypto.ticker}>
                    {crypto.companyName}
                  </Link>
                  )
                </td>{" "}
                <td>{crypto.price}</td>
                <td
                  style={
                    crypto.changes > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  <strong>
                    {crypto.changes} ({crypto.changesPercentage}%)
                  </strong>
                </td>
                <td>{crypto.price}</td>
                <td>{crypto.price}</td>
                <td>{crypto.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Price;
