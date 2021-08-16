import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const PayDebtButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
      e.preventDefault();
  }
  return (
    <>
      <Button variant="success" onClick={handleShow} className="my-2">
        Pagar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Pagar Deuda</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Ingresa cantidad a pagar *</Form.Label>
              <Form.Control type="number" placeholder="500" required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" onClick={handleClose} type="submit">
              Pagar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PayDebtButton;
