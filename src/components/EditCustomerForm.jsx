import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import styles from "../css/EditCustomerForm.module.css";
import { getAreaCode, getBodyNumber } from "../helpers/sliceNumber";

const EditCustomerForm = ({
  customer,
  nameRef,
  lastNameRef,
  nickNameRef,
  areaCodeRef,
  bodyNumberRef,
  addressRef,
  handleSubmit,
  error,
}) => {
  const { name, lastName, nickName, phoneNumber, address } = customer;
  const [areaCode, setAreaCode] = useState(0);
  const [bodyNumber, setBodyNumber] = useState(0);

  useEffect(() => {
    if (phoneNumber) {
      setAreaCode(getAreaCode(phoneNumber));
      setBodyNumber(getBodyNumber(phoneNumber));
    }
  }, [phoneNumber]);

  return (
    <Form className="mb-3 mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>
          Nombre <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="María Alejandra"
          defaultValue={name}
          ref={nameRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Apellido <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Gonzalez"
          defaultValue={lastName}
          ref={lastNameRef}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apodo</Form.Label>
        <Form.Control
          type="text"
          placeholder="doña rosa"
          defaultValue={nickName}
          ref={nickNameRef}
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
              defaultValue={areaCode !== 0 ? areaCode : null}
              ref={areaCodeRef}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>número sin 0 ni 15</Form.Label>
            <Form.Control
              type="number"
              placeholder="5123456"
              defaultValue={bodyNumber !== 0 ? bodyNumber : null}
              ref={bodyNumberRef}
              required
            />
          </Form.Group>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          placeholder="Honduras 1254"
          defaultValue={address}
          ref={addressRef}
        />
      </Form.Group>
      <div className={styles.buttonFormContainer}>
        <Button variant="success" type="submit" className="w-100">
          Guardar Cambios
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

export default EditCustomerForm;
