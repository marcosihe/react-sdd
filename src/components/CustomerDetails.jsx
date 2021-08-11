import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../css/CustomerDetails.module.css";
import CurrentDebt from "./CurrentDebt";
import CustomerData from "./CustomerData";
import ShoppingHistory from "./ShoppingHistory";

const CustomerDetails = () => {
  return (
    <Container>
      <section className={styles.personalDataContainer}>
        <FontAwesomeIcon
          icon={faAddressBook}
          className={styles.detailPersonIcon}
        />
        <CustomerData className={styles.customerData} />
      </section>
      <CurrentDebt/>
      <ShoppingHistory/>
    </Container>
  );
};

export default CustomerDetails;
