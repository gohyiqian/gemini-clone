import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import CandleStickChart from "../components/CandleStickChart";
import ThemeContext from "../ThemeContext";

const Stock = (props) => {
  const [cryptoPrice, setCryptoPrice] = useState();
  const [cryptoName, setCryptoName] = useState();
  const [mktCap, setMktCap] = useState();
  const [priceChange, setPriceChange] = useState();
  const { theme } = useContext(ThemeContext);
  const param = useParams();

  // COMPONENTDIDMOUNT..runs only once when Component mounts
  useEffect(() => {
    const targetSymbol = param.symbol;
    const stocksURL = `https://financialmodelingprep.com/api/v3/profile/${targetSymbol}?apikey=`;
    const getActiveStocks = async () => {
      const res = await fetch(`${stocksURL}${process.env.REACT_APP_API_KEY}`);
      console.log(res);
      if (res.ok) {
        const payload = await res.json();
        console.log(payload);
        setCryptoPrice(payload[0].price);
        setCryptoName(payload[0].companyName);
        setMktCap(payload[0].mktCap);
        setPriceChange(payload[0].changes);
      }
    };
    getActiveStocks();
  }, []);

  return (
    <div className={`walletPage ${theme}`}>
      <h1>{cryptoName}</h1>
      <p> Notional prices as of {new Date().toLocaleString()}</p>
      <Container>
        <Row xs={1} md={1}>
          <Col>
            <Card className={`showPricePage ${theme}`}>
              <Card.Body>
                <h2>{cryptoName}</h2>
                <h3 className="price">${cryptoPrice}</h3>
                <p
                  style={
                    crypto.changes > 0 ? { color: "green" } : { color: "red" }
                  }
                >
                  ${priceChange}
                </p>
                <CandleStickChart />
                <h2>About {cryptoName}</h2>
                <p>
                  Bitcoin is the world’s first cryptocurrency and blockchain.
                  Bitcoin was first described in a white paper published by
                  Satoshi Nakamoto in October, 2008. Nakamoto is believed to be
                  a pseudonym for the individual or group responsible for
                  Bitcoin as there is no record of a computer scientist by this
                  name prior to the launch of Bitcoin in 2009. At the time,
                  Satoshi claimed to be a 37 year-old man living in Tokyo,
                  Japan. The translation of his name offers interesting
                  insights: satoshi means “clear-thinking” or “wise,” naka means
                  “inside” or “relationship,” and moto means “the origin” or
                  “the foundation.” Taken together, it could be translated as
                  “thinking clearly inside the foundation.” Satoshi continued to
                  update the Bitcoin source code until 2010 and wrote hundreds
                  of blog posts in flawless English totalling 80,000 words,
                  roughly the length of a novel. Satoshis’ first post used
                  American spellings, however, every subsequent post used
                  British spellings and colloquialisms. His writing timestamps
                  don’t point to any particular time zone. On the 23rd of April,
                  2011, Satoshi disappeared from the Internet, telling a
                  developer in an email that he has "moved onto other things."
                  Whoever Satoshi is, he is considered a polymath who possesses
                  extensive knowledge with respect to computer programming,
                  economics, cryptography, and peer-to-peer networking.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stock;
