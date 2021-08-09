import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../css/CustomersList.module.css";
import CustomerListItem from "./CustomerListItem";

const CustomersList = ({customersList}) => {
  return (
    <section className={styles.customersListSection}>
      <ListGroup>
        {customersList.map((item) => (
          <CustomerListItem
            key={item.id}
            customerName={item.name}
            customerLastName={item.lastName}
            customerNickName={item.nickName}
            customerDebt={item.currentDebt}
          />
        ))}
      </ListGroup>
    </section>
  );
};

export default CustomersList;
