import React, { memo, useContext } from "react";
import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const Withdrawal = memo(() => {
  const { theme } = useContext(ThemeContext);
  const handleSubmit = () => {
    alert("submitted");
  };
  return (
    <>
      <h2 className="transferTitle">Withdraw Funds here</h2>
      <br />
      <Row xs={1} md={1}>
        <Col>
          <Card className={`walletCard ${theme}`}>
            <Card.Img id="icon" />
            <Card.Body className="transferFunds">
              <h4>1: Select Your Currencies</h4>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Select Currencies"
                className="mt-2"
              >
                <Dropdown.Item>Fiat Currencies</Dropdown.Item>
                <Dropdown.Divider />
                {["SGD", "USD", "EUR", "YEN"].map((item, idx) => (
                  <Dropdown.Item eventKey="idx">{item}</Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item>Crypto Currencies</Dropdown.Item>
                <Dropdown.Divider />
                {["BTC", "ETH", "ADA", "MATIC"].map((item, idx) => (
                  <Dropdown.Item eventKey="idx">{item}</Dropdown.Item>
                ))}
              </DropdownButton>
              <hr />
              <h4>2: Enter Amount</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                  <Form.Control type="text" placeholder="Amount" />
                </Form.Group>
                <br />
                <Button variant="secondary" size="md" type="submit">
                  Confirm
                </Button>
              </Form>
              <hr />
              <h4>3: Select Destination</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                  <Form.Control type="text" placeholder="Amount" />
                </Form.Group>
                <br />
                <Button variant="secondary" size="md" type="submit">
                  Confirm
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
});

export default Withdrawal;
