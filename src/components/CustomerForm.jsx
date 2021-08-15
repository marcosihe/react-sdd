import React from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import styles from "../css/CustomerForm.module.css";


const CustomerForm = ({ setName, setLastName, setNickName, setNumberPart1, setNumberPart2, setAddress, handleSubmit, error }) => {

  return (
    <Form className="mb-3 mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>
          Nombre <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="María Alejandra"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Apellido <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Gonzalez"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apodo</Form.Label>
        <Form.Control
          type="text"
          placeholder="doña rosa"
          onChange={(e) => setNickName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Celular <span className="text-danger">*</span>
        </Form.Label>
        <Row className="mb-3">
          <Form.Group as={Col} xs={4}>
            <Form.Label>característica</Form.Label>
            <Form.Control
              type="number"
              placeholder="381"
              required
              onChange={(e) => setNumberPart1(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>número sin 0 ni 15</Form.Label>
            <Form.Control
              type="number"
              placeholder="5123456"
              required
              onChange={(e) => setNumberPart2(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          placeholder="Honduras 1254"
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <div className={styles.buttonFormContainer}>
        <Button variant="success" type="submit" className="w-100">
          Agregar Cliente
        </Button>
      </div>
      {error === true ? (
        <Alert variant="danger" className="my-4">
          Verifique el ingreso de los datos obligatorios *
        </Alert>
      ) : null}
    </Form>
  );
};

export default CustomerForm;
