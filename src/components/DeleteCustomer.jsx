import React from "react";
import styles from "../css/DeleteCustomer.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { deleteRequest } from "../helpers/apiRequest";

const DeleteCustomer = ({id, setCustomers, setDeleted}) => {
  const URL = process.env.REACT_APP_API_URL;

  const deleteCustomer = (id, setCustomers, URL, setDeleted) => {
    deleteRequest(id, setCustomers, URL, setDeleted);
  }
  return (
    <Button
      type="submit"
      variant="danger"
      className={styles.deleteCustomerButton}
      onClick={ () => deleteCustomer(id, setCustomers, URL, setDeleted)}
    >
      <FontAwesomeIcon icon={faTrashAlt} alt="botón de eliminar cliente" />
    </Button>
  );
};

export default DeleteCustomer;
