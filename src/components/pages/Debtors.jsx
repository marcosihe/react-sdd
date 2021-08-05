import React from "react";
import { Container } from "react-bootstrap";
import CustomersList from "../CustomersList";
import Search from '../Search';
import Order from '../Order';
import styles from '../css/Debtors.module.css';


const Debtors = () => {
  return (
    <Container>
      <section className={styles.searchingSection}>
        <Search/>
        <Order/>
      </section>
      <CustomersList/>
    </Container>
  );
};

export default Debtors;
