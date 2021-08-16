import React from "react";
import styles from "../css/CurrentDebt.module.css";

const CurrentDebt = ({ currentDebt }) => {
  return (
    <section className={styles.currentDebtContainer}>
        <div className={styles.debtAmount}>$ {currentDebt}</div>
        <p className={styles.currentDebtText}>Deuda Actual</p>
    </section>
  );
};

export default CurrentDebt;
