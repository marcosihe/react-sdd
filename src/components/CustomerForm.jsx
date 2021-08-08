import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "./css/CustomerForm.module.css";

const AddCustomer = () => {
  return (
    <Form className="mb-3 mt-3">
      <Form.Group className="mb-3">
        <Form.Label>Nombre <span className={styles.requiredSign}>*</span></Form.Label>
        <Form.Control type="text" placeholder="María Alejandra" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido <span className={styles.requiredSign}>*</span></Form.Label>
        <Form.Control type="text" placeholder="Gonzalez" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apodo</Form.Label>
        <Form.Control type="text" placeholder="Chavela" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Celular <span className={styles.requiredSign}>*</span></Form.Label>
        <Row className="mb-3">
          <Form.Group as={Col} xs={4}>
            <Form.Label>Característica</Form.Label>
            <Form.Control type="number" placeholder="381" required />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Número sin 0 ni 15</Form.Label>
            <Form.Control type="number" placeholder="5123456" required />
          </Form.Group>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Honduras 1254" />
      </Form.Group>
      <div className={styles.buttonFormContainer}>
      <Button variant="success">Agregar Cliente</Button>
      </div>
    </Form>
  );
};

export default AddCustomer;
