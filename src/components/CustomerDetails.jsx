import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/CustomerDetails.module.css";
import { apiRequest } from "../helpers/apiRequest";
import CurrentDebt from "./CurrentDebt";
import CustomerData from "./CustomerData";
import DeleteCustomer from "./DeleteCustomer";
import ShoppingHistory from "./ShoppingHistory";

const CustomerDetails = () => {

  const { id } = useParams();  // id == ':id'
  const aux_id = Array.from((id));
  const URL = `${process.env.REACT_APP_API_URL}/${aux_id[1]}`

  const [customer, setCustomer] = useState([]);
  
  useEffect(() => {
    apiRequest(setCustomer, URL);
  }, [URL])

  return (
    <section className={styles.customerDetailsContainer}>
      <section className={styles.personalDataContainer}>
        <DeleteCustomer customer={customer.id}/>
        <CustomerData customer={customer}/>
      </section>
      <CurrentDebt currentDebt={customer.currentDebt}/>
      <ShoppingHistory history={customer.history}/>
    </section>
  );
};

export default CustomerDetails;
