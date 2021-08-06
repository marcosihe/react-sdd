import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./css/CustomerListItem.module.css";

import ViewDetailsButton from "./ViewDetailsButton";
import EditDebtButton from "./EditDebtButton";

const CustomerListItem = (props) => {
  const { customerName, customerLastName, customerNickName, customerDebt, id } =
    props;
  return (
    <ListGroup.Item className={styles.customerContainer}>
      <div className={styles.customerDataContainer}>
        <p className={styles.customerName}>
          {customerLastName}, {customerName}
        </p>
        <div className="d-flex">
          <p className={styles.customerDebt}>${customerDebt}</p>
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
