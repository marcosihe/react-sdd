import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "./css/CustomersList.module.css";
import CustomerListItem from "./CustomerListItem";

const CustomersList = () => {
  return (
    <section className={styles.customersListSection}>
      <ListGroup>
        <CustomerListItem clientName={'Ricardo Pereyra'} clientNickName={''} clientDebt={450}/>
        <CustomerListItem clientName={'Marcelo Bianchi'} clientNickName={'(Chavela)'} clientDebt={2345}/>
        <CustomerListItem clientName={'Carlos Gallardo'} clientNickName={'El pelao'} clientDebt={1245}/>
        <CustomerListItem clientName={'Luciano Darín'} clientNickName={''} clientDebt={1245}/>
      </ListGroup>
    </section>
  );
};

export default CustomersList;
