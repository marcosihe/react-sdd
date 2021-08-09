import React from "react";
import { Container } from "react-bootstrap";
import CustomersList from "../CustomersList";
import Search from '../Search';
import Order from '../Order';
import styles from '../../css/Debtors.module.css';
import AddCustomerButton from "../AddCustomerButton";

const Debtors = ({customers}) => {
  
  return (
    <Container>
      <section className={styles.searchingSection}>
        <Search/>
        <Order/>
        <AddCustomerButton/>
      </section>
      <CustomersList customersList={customers}/>
    </Container>
  );
};

export default Debtors;
