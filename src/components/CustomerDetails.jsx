import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../css/CustomerDetails.module.css";
import CustomerData from "./CustomerData";

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
      <section>
        <div>$1250</div>
        <div>Saldar parte de la deuda</div>
        <div>Saldar deuda completa</div>
      </section>
      <section>
        <h2>Historial de compras</h2>
        <p>Monto de la compra: $650</p>
        <p>Conceptos de la compra: Frutas, leche, huevos.</p>
        <p>Fecha: 03/11/2021</p>
      </section>
    </Container>
  );
};

export default CustomerDetails;
