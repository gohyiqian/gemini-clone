import React, { useState, useContext } from "react";
import { Container, Col, Row, Card, Tabs, Tab } from "react-bootstrap";
import { withRouter } from "react-router";
import TransactionPage from "./TransactionPage";
import TransferPage from "./TransferPage";
import BalancePage from "./BalancePage";
import ThemeContext from "../ThemeContext";

const WalletPage = ({ status, setStatus }) => {
  const [key, setKey] = useState("balances");
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`walletPage ${theme}`}>
      <h1>Your Wallet</h1>
      <p> Notional values as of {new Date().toLocaleString()}</p>
      <Container>
        <Row xs={1} md={1}>
          <Col>
            <Card className={`walletCard ${theme}`}>
              <Card.Img id="icon" />
              <Card.Body>
                <Card.Title>Account Balances</Card.Title>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                >
                  <Tab eventKey="balances" title="Balances">
                    <BalancePage />
                  </Tab>
                  <Tab eventKey="transaction" title="Transaction History">
                    <TransactionPage />
                  </Tab>
                  <Tab eventKey="transfer" title="Transfer History">
                    <TransferPage />
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

export default withRouter(WalletPage);
