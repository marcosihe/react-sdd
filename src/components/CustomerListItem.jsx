import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "../css/CustomerListItem.module.css";

import ViewDetailsButton from "./ViewDetailsButton";
import EditDebtButton from "./EditDebtButton";
import { Link } from "react-router-dom";

const CustomerListItem = (props) => {
  const { customerName, customerLastName, customerNickName, customerDebt, id } =
    props;
  return (
    <ListGroup.Item className={styles.customerContainer}>
      <div className={styles.customerDataContainer}>
        <p className={styles.customerName}>
          {customerLastName}, {customerName}
        </p>
        <div className={styles.debtContainer}>
          <Link to={`/deudores/detalles/editar/${id}`} className={styles.customerDebtLink}>${customerDebt}</Link>
          <EditDebtButton id={id} />
        </div>
      </div>
      <div className={styles.customerDataContainer}>
        <p className={styles.customerNickName}>({customerNickName})</p>
        <ViewDetailsButton />
      </div>
    </ListGroup.Item>
  );
};

export default CustomerListItem;
