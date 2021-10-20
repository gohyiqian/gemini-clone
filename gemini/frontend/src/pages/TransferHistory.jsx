import React, { useContext } from "react";
import { Col, Row, Card } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const TransferHistory = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Row xs={1} md={1}>
      <Col>
        <h2 className="transferTitle">Funds Transfer History</h2>
        <Card className={`walletCard ${theme}`}>
          <Card.Body className="transferHis">
            To display Transaction History here
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TransferHistory;
