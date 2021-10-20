import React, { useContext } from "react";
import DonutChart from "../components/DonutChart";
import BarChart from "../components/BarChart";
import { Container, Col, Row, Card } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const BalancePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Container>
        <Row xs={1} md={1}>
          <Col>
            <Card className={`walletCard ${theme}`}>
              <Card.Img id="icon" />
              <Card.Body>
                <h1>Account Balances</h1>
                <h3>Display User's cryto holdings here</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Holdings</th>
                      <th>Value</th>
                      <th>Gain/Lost</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>BTC</td>
                      <td>0.5</td>
                      <td>$2000</td>
                      <td>-$1000</td>
                    </tr>
                    <tr>
                      <td>ETH</td>
                      <td>2.5</td>
                      <td>$1000</td>
                      <td>+$1000</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row xs={1} md={2} lg={2}>
          <Col>
            <DonutChart />
          </Col>
          <Col>
            <BarChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BalancePage;
