import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../css/CurrentDebt.module.css";

const CurrentDebt = ({ currentDebt }) => {
  return (
    <section className={styles.currentDebtContainer}>
      <div className={styles.amountContainer}>
        <div className={styles.debtAmount}>$ {currentDebt}</div>
        <FontAwesomeIcon
          icon={faHandPointLeft}
          className={styles.handPointLeftIcon}
        />
        <p className={styles.currentDebtText}>Deuda Actual</p>
      </div>
      <div className={styles.currentDebtForm}>
        <div className={styles.amountToPayLabel}><p>(Ingrese la cantidad a pagar)</p></div>
        <Form className={styles.payForm}>
          <Form.Group>
            <Form.Control type="number" placeholder={0} />
          </Form.Group>
          <Form.Group>
            <Button type="submit" variant="success" className={styles.payButton}>
              Pagar
            </Button>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
};

export default CurrentDebt;
