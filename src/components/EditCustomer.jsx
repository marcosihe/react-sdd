import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const EditCustomer = () => {
  return (
    <Button type="submit" variant="warning">
      <FontAwesomeIcon
        icon={faPencilAlt}
        alt="Botón de editar datos del cliente"
      />
    </Button>
  );
};

export default EditCustomer;
