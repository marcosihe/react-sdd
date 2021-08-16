import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { errorAlert, successfulPaymentAlert } from "../helpers/alerts";
import { apiRequest, putMethod } from "../helpers/apiRequest";
import { buildObjectToSend } from "../helpers/objectTosend";
import { getAreaCode, getBodyNumber } from "../helpers/sliceNumber";
import { validatePayment } from "../helpers/validations";

const PayDebtButton = ({ customer, setCustomers, paymentRef, setSuccessfulPayment }) => {
  const URL = process.env.REACT_APP_API_URL;
  const responseStatus = 200;

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    name,
    lastName,
    nickName,
    phoneNumber,
    currentDebt,
    address,
    history,
    id,
  } = customer;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePayment(paymentRef.current.value, currentDebt)) {
      // Enviar nuevo saldo a la API
      try {
        const response = await fetch(
          `${URL}/${id}`,
          putMethod(
            buildObjectToSend(
              name,
              lastName,
              nickName,
              getAreaCode(phoneNumber), // buildingObjectToSend trabaja recibiendo por separado el número de cel
              getBodyNumber(phoneNumber),
              currentDebt - paymentRef.current.value,
              address,
              history
            )
          )
        );
        if(response.status === responseStatus){
          apiRequest(setCustomers, URL);
          successfulPaymentAlert();
          setSuccessfulPayment(true);
        }
      } catch (error) {
        console.log(error);
        errorAlert(
          "No se pudo efectuar el pago."
        );
      }
      setError(false);
      setShow(false);
    } else {
      //mostrar mensaje de error
      setError(true);
    }
  };
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
              <Form.Control
                type="number"
                placeholder="500"
                onChange={() => setError(false)}
                required
                ref={paymentRef}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit">
              Pagar
            </Button>
          </Modal.Footer>
        </Form>
        {error ? (
          <Alert variant="danger" className="p-2 mx-2">
            Ingrese un monto mayor a $0 y menor o igual a ${currentDebt}
          </Alert>
        ) : null}
      </Modal>
    </>
  );
};

export default PayDebtButton;
