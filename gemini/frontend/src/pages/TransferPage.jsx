import React, { useState, useContext } from "react";
import { Container, Col, Row, Card, Tabs, Tab } from "react-bootstrap";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import ThemeContext from "../ThemeContext";
import TransferHistory from "./TransferHistory";

const TransferPage = () => {
  const [key, setKey] = useState("balances");
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Row xs={1} md={1}>
        <Col>
          <Card className={`walletCard ${theme}`}>
            <Card.Img id="icon" />
            <Card.Body>
              <h1>Funds Transfer</h1>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="balances" title="Deposit">
                  <Deposit />
                </Tab>
                <Tab eventKey="transaction" title="Withdrawal">
                  <Withdrawal />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <TransferHistory />
    </Container>
  );
};

export default TransferPage;
