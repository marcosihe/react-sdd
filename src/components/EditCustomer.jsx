import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditCustomerForm from "./EditCustomerForm";

const EditCustomer = () => {
  console.log(useParams());
  return (
    <Container>
      <h1>Editar Cliente</h1>
      <EditCustomerForm />
    </Container>
  );
};

export default EditCustomer;
