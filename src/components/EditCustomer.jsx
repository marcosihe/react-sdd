import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { apiRequest, putMethod } from "../helpers/apiRequest";
import EditCustomerForm from "./EditCustomerForm";
import {
  validateAreaCode,
  validateBodyNumber,
  validateNames,
} from "../helpers/validations.js";
import { errorAlert, successAlert } from "../helpers/alerts";
import { buildObjectToSend } from "../helpers/objectTosend";

const EditCustomer = ({setCustomers}) => {
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const responseStatus = 200;
  const [customer, setCustomer] = useState({});
  const [error, setError] = useState(false);

  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const nickNameRef = useRef("");
  const areaCodeRef = useRef(0);
  const bodyNumberRef = useRef(0);
  const addressRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones del formulario
    if (
      validateAreaCode(parseInt(areaCodeRef.current.value)) &&
      validateBodyNumber(parseInt(bodyNumberRef.current.value)) &&
      validateNames(nameRef.current.value, lastNameRef.current.value)
    ) {
      try {
        const response = await fetch(
          `${URL}/${id}`,
          putMethod(
            buildObjectToSend(
              nameRef.current.value,
              lastNameRef.current.value,
              nickNameRef.current.value,
              areaCodeRef.current.value,
              bodyNumberRef.current.value,
              customer.currentDebt, // valor que no se debe modificar desde el EditCustomerform
              addressRef.current.value,
              customer.history // valor que no se debe modificar desde el EditCustomerform
            )
          )
        );
        if(response.status === responseStatus){
          successAlert();
          apiRequest(setCustomers, URL)
        }
      } catch (error) {
        console.log(error);
        errorAlert("¡Los datos no se cargaron!");
      }
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    apiRequest(setCustomer, `${URL}/${id}`);
  }, [URL, id]);

  return (
    <Container>
      <h1 className="text-center my-2">Editar Cliente</h1>
      <EditCustomerForm
        customer={customer}
        nameRef={nameRef}
        lastNameRef={lastNameRef}
        nickNameRef={nickNameRef}
        areaCodeRef={areaCodeRef}
        bodyNumberRef={bodyNumberRef}
        addressRef={addressRef}
        handleSubmit={handleSubmit}
        error={error}
      />
    </Container>
  );
};

export default EditCustomer;
