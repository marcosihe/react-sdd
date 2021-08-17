import React, { useState } from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Form } from "react-bootstrap";
import { validatePurchaseAmount } from "../helpers/validations";
import { errorAlert, successfulPurchaseAlert } from "../helpers/alerts";
import { putMethod } from "../helpers/apiRequest";
import { buildObjectToSend } from "../helpers/objectTosend";
import { getAreaCode, getBodyNumber } from "../helpers/sliceNumber";
import { idGenerator } from "../helpers/idGenerator";
import { currentDate } from "../helpers/date";

const AddDebtButton = ({ text, customer, purchaseRef, conceptRef, setSuccessfulPurchase }) => {
  const URL = process.env.REACT_APP_API_URL;
  const responseStatus = 200
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    const purchaseValue = parseInt(purchaseRef.current.value);

    // Agregando nueva compra al array history
    let newLengthOfHistory = history.push({
      id_operation: `${idGenerator(id)}`,
      debt: purchaseValue,
      concept:
        conceptRef.current.value !== ""
          ? conceptRef.current.value
          : "Sin detallar",
      date: `${currentDate()}`,
    })
    console.log(newLengthOfHistory);

    // Objeto que contiene la información de la nueva compra: monto, concepto y fecha
    const objectToSend = buildObjectToSend(
      name,
      lastName,
      nickName,
      getAreaCode(phoneNumber), // buildingObjectToSend trabaja recibiendo por separado el número de cel
      getBodyNumber(phoneNumber),
      currentDebt + purchaseValue,
      address,
      history
    );

      // Validación de datos ingresados
    if (validatePurchaseAmount(purchaseValue)) {
      // Enviar datos a la API mediante el método PUT
      try {
        const response = await fetch(`${URL}/${id}`, putMethod(objectToSend));
        if(await response.status === responseStatus){
          successfulPurchaseAlert();
          setSuccessfulPurchase(true);
        }
      } catch (error) {
        console.log(error);
        errorAlert("No se pudo guardar la compra.");
      }
    } else {
      errorAlert("Debe ingresar una cantidad en $ mayor a 0.");
    }
  };
  return (
    <>
      <Button variant="outline-danger" onClick={handleShow} className="">
        {text ? (
          <span>Nueva Compra</span>
        ) : (
          <FontAwesomeIcon
            icon={faCartArrowDown}
            alt="Logo de carro de compras"
          />
        )}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nueva compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Monto de la compra en $</Form.Label>
              <Form.Control
                type="number"
                placeholder="500"
                ref={purchaseRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Concepto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Bandeja de huevo, Verduras, pan, ..."
                ref={conceptRef}
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
    </>
  );
};

export default AddDebtButton;
