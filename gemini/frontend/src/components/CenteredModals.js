import React from "react";
import { Button, Modal } from "react-bootstrap";

const CenteredModals = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Kindly Wait ...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>You are Logging In</h4>
        <p>
          Welcome back my esteemed trader, your portfolio has changed by X%
          since your last logged in.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModals;
