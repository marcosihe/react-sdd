import React from "react";
import styles from "../css/DeleteCustomer.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteCustomer = () => {
  return (
    <Button
      type="submit"
      variant="danger"
      className={styles.deleteCustomerButton}
    >
      <FontAwesomeIcon icon={faTrashAlt} alt="botón de eliminar cliente" />
    </Button>
  );
};

export default DeleteCustomer;
