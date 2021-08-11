import React from "react";
import styles from "../css/CustomerDetails.module.css";
import CurrentDebt from "./CurrentDebt";
import CustomerData from "./CustomerData";
import DeleteCustomer from "./DeleteCustomer";
import ShoppingHistory from "./ShoppingHistory";

const CustomerDetails = () => {
  return (
    <section className={styles.customerDetailsContainer}>
      <section className={styles.personalDataContainer}>
        <DeleteCustomer/>
        <CustomerData/>
      </section>
      <CurrentDebt/>
      <ShoppingHistory/>
    </section>
  );
};

export default CustomerDetails;
