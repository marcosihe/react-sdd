import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/CustomerDetails.module.css";
import { apiRequest } from "../helpers/apiRequest";
import CurrentDebt from "./CurrentDebt";
import CustomerData from "./CustomerData";
import DeleteCustomer from "./DeleteCustomer";
import ShoppingHistory from "./ShoppingHistory";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditCustomerButton from "./EditCustomerButton";
import DeletedCustomerView from "./DeletedCustomerView";

const CustomerDetails = ({setCustomers}) => {
  const { id } = useParams(); // id == ':id'
  const aux_id = Array.from(id);
  const URL = `${process.env.REACT_APP_API_URL}/${aux_id[1]}`;

  const [customer, setCustomer] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    apiRequest(setCustomer, URL);
  }, [URL]);

  return (
    <>
    {deleted ? (<DeletedCustomerView/>)
    :
    (
      <section className={styles.customerDetailsContainer}>
      <section className={styles.personalDataContainer}>
        <div>
          <FontAwesomeIcon
            icon={faAddressBook}
            className={styles.detailPersonIcon}
            alt="Logo de cliente"
          />
          <div className={styles.detailsBtnContainer}>
            <EditCustomerButton id={customer.id} />
            <DeleteCustomer id={customer.id} setCustomers={setCustomers} setDeleted={setDeleted}/>
          </div>
        </div>
        <CustomerData customer={customer} />
      </section>
      <CurrentDebt currentDebt={customer.currentDebt} />
      <ShoppingHistory history={customer.history} />
    </section>
    )}
    </>
  );
};

export default CustomerDetails;
