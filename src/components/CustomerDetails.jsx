import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CurrentDebt from "./CurrentDebt";
import CustomerData from "./CustomerData";
import EditCustomerButton from "./EditCustomerButton";
import DeleteCustomer from "./DeleteCustomer";
import DeletedCustomerView from "./DeletedCustomerView";
import ShoppingHistory from "./ShoppingHistory";
import { apiRequest } from "../helpers/apiRequest";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../css/CustomerDetails.module.css";
import PayDebtButton from "./PayDebtButton";
import AddDebtButton from "./AddDebtButton";

const CustomerDetails = ({ setCustomers }) => {
  const URL = `${process.env.REACT_APP_API_URL}/${useParams().id}`;
  const [customer, setCustomer] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [successfulPayment, setSuccessfulPayment] = useState(false);
  const paymentRef = useRef(0);

  useEffect(() => {
    apiRequest(setCustomer, URL);
  }, [URL, successfulPayment ]);

  return (
    <>
      {deleted ? (
        <DeletedCustomerView />
      ) : (
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
                <DeleteCustomer
                  id={customer.id}
                  setCustomers={setCustomers}
                  setDeleted={setDeleted}
                />
              </div>
            </div>
            <CustomerData customer={customer} />
          </section>
          <CurrentDebt currentDebt={customer.currentDebt} />
          <div className={styles.customerDetailsBtnContainer}>
            <PayDebtButton
              customer={customer}
              setCustomers={setCustomers}
              paymentRef={paymentRef}
              setSuccessfulPayment={setSuccessfulPayment}
            />
            <AddDebtButton text={true} />
          </div>
          <ShoppingHistory history={customer.history} />
        </section>
      )}
    </>
  );
};

export default CustomerDetails;
