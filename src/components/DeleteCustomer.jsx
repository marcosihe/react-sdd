import React from "react";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../css/DeleteCustomer.module.css";
import { Button } from "react-bootstrap";

const DeleteCustomer = () => {
  return (
    <div className={styles.deleteCustomerContainer}>
      <FontAwesomeIcon
        icon={faAddressBook}
        className={styles.detailPersonIcon}
      />
      <Button
        type="submit"
        variant="outline-danger"
        className={styles.deleteCustomerButton}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default DeleteCustomer;
