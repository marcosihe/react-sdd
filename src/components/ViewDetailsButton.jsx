import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ViewDetailsButton = ({ id }) => {
  return (
    <Link to={`/deudores/detalles/${id}`} className="btn btn-outline-secondary">
      <span>Detalles </span><FontAwesomeIcon alt="Ícono de 'ver detalles'" icon={faEye} />
    </Link>
  );
};

export default ViewDetailsButton;
