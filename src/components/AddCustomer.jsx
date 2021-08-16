import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CustomerForm from "./CustomerForm";
import styles from "../css/AddCustomer.module.css";
import {
  validateAreaCode,
  validateBodyNumber,
  validateNames,
} from "../helpers/validations.js";
import { successAlert, errorAlert } from "../helpers/alerts";
import { apiRequest, postMethod } from "../helpers/apiRequest";
import { buildObjectToSend } from "../helpers/objectTosend";

const AddCustomer = ({ setCustomers }) => {
  const URL = process.env.REACT_APP_API_URL;
  const responseStatus = 201;

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [numberPart1, setNumberPart1] = useState("");
  const [numberPart2, setNumberPart2] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones del formulario
    if (
      validateAreaCode(numberPart1) &&
      validateBodyNumber(numberPart2) &&
      validateNames(name, lastName)
    ) {
      // Enviar datos a la API
      setError(false);
      // POST Request
      try {
        const response = await fetch(
          URL,
          postMethod(
            buildObjectToSend(
              name,
              lastName,
              nickName,
              numberPart1,
              numberPart2,
              0, // valor inicial de la deuda (currentDebt variable)
              address,
              [] // valor inicial del historial de compras (history variable)
            )
          )
        );

        if ((await response.status) === responseStatus) {
          successAlert();
          e.target.reset();
          apiRequest(setCustomers, URL); // Actualiza la lista con el nuevo cliente
        }
      } catch (error) {
        console.log(error);
        errorAlert("¡Los datos no se cargaron!");
      }
    } else {
      // Datos erroneos: mostrar mensaje de error
      setError(true);
    }
  };

  return (
    <Container>
      <h1 className={styles.addCustomerTitle}>Agregar nuevo cliente</h1>
      <CustomerForm
        setName={setName}
        setLastName={setLastName}
        setNickName={setNickName}
        setNumberPart1={setNumberPart1}
        setNumberPart2={setNumberPart2}
        setAddress={setAddress}
        handleSubmit={handleSubmit}
        error={error}
      />
    </Container>
  );
};

export default AddCustomer;
