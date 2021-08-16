import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";

const NewPurchaseModal = ({ handleClose, handleSubmit, show }) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Monto de la compra</Form.Label>
              <Form.Control type="number" placeholder="500" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Conceptos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Bandeja de huevo, Verduras, pan, ..."
              ></Form.Control>
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cerrar
              </Button>
              <Button type="submit" variant="success" onClick={handleClose}>
                Guardar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    )
}

export default NewPurchaseModal
