import React, { memo, useContext, useState } from "react";
import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { DropdownButton, Dropdown } from "react-bootstrap";
import ThemeContext from "../ThemeContext";

const Deposit = memo(() => {
  const { theme } = useContext(ThemeContext);
  const [display, setDisplay] = useState("Select here");

  const handleSelect = (e) => {
    console.log(e);
    setDisplay(e);
  };

  const handleSubmit = () => {
    alert("submitted");
  };
  return (
    <>
      <h2 className="transferTitle">Deposit Funds</h2>
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
                title={display}
                className="mt-2"
                onSelect={handleSelect}
              >
                <Dropdown.Item disabled="true">Fiat Currencies</Dropdown.Item>
                <Dropdown.Divider />
                {["SGD", "USD", "EUR", "YEN"].map((item, idx) => (
                  <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item disabled="true">Crypto Currencies</Dropdown.Item>
                <Dropdown.Divider />
                {["BTC", "ETH", "ADA", "MATIC"].map((item, idx) => (
                  <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                ))}
              </DropdownButton>
              <br />
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
              <br />
              <hr />
              <h4>3: Select Destination</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                  <Form.Control type="text" placeholder="Destination" />
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

export default Deposit;
