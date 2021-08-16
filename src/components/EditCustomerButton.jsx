import React from "react";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const EditCustomerButton = ({id}) => {
  return (
    <Link to={`/deudores/editar/${id}`} className="btn btn-outline-warning">
      <FontAwesomeIcon
        icon={faPencilAlt}
        alt="Botón de editar datos del cliente"
      />
    </Link>
  );
};

export default EditCustomerButton;
