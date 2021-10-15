import React, { useState, useContext } from "react";
import { Container, Col, Row, Card, Tabs, Tab } from "react-bootstrap";
import PricePage from "./PricePage";
import ThemeContext from "../ThemeContext";

const WalletPage = () => {
  const [key, setKey] = useState("balances");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`walletPage ${theme}`}>
      <h1>Your Wallet</h1>
      <p> Notional values as of {new Date().toLocaleString()}</p>
      <Container>
        <Row xs={1} md={1}>
          <Col>
            <Card>
              <Card.Img id="icon" img src="" />
              <Card.Body>
                <Card.Title>Account Balances</Card.Title>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="balances" title="Balances">
                    <PricePage />
                  </Tab>
                  <Tab eventKey="transaction" title="Transaction History">
                    <PricePage />
                  </Tab>
                  <Tab eventKey="transfer" title="Transfer History">
                    <PricePage />
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WalletPage;
