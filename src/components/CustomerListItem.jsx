import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, Button } from "react-bootstrap";
import styles from "./css/CustomerListItem.module.css";

const CustomerListItem = (props) => {
  const { clientName, clientNickName, clientDebt } = props;
  return (
    <ListGroup.Item className={styles.customerContainer}>
      <div className={styles.customerDataContainer}>
        <div className={styles.customerName}>{clientName}</div>
        <div className={styles.customerDebt}>${clientDebt}</div>
      </div>
      <div className={styles.customerDataContainer}>
        <div className={styles.customerNickName}>
          <p>{clientNickName}</p>
        </div>
        <Button type="button" variant="outline-secondary">
          <span>Ver detalle </span>
          <FontAwesomeIcon
            alt="Ícono de 'ver detalles'"
            icon={faEye}
            className={styles.viewDetailsIcon}
          />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default CustomerListItem;
