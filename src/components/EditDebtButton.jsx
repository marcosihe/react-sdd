import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/EditDebtButton.module.css";

const EditDebtButton = ({ id }) => {
  return (
    <Button type="button" variant="outline-warning">
      <Link
        to={`/deudores/detalles/editar/${id}`}
        className={styles.editItemLink}
      >
        <FontAwesomeIcon icon={faEdit} className={styles.editIcon} />
      </Link>
    </Button>
  );
};

export default EditDebtButton;
