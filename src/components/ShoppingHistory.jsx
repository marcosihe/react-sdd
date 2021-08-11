import React from "react";
import ShoppingHistoryList from "./ShoppingHistoryList";
import styles from "../css/ShoppingHistory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHistory } from "@fortawesome/free-solid-svg-icons";

const ShoppingHistory = ({history}) => {
  console.log(history)
  return (
    <section>
      <div className={styles.ShoppingHistoryTitleContainer}>
        <h2 className={styles.shoppingHistoryTitle}>Historial de Compras</h2>
        <FontAwesomeIcon icon={faHistory} className={styles.shoppingHistoryIcon} />
        <FontAwesomeIcon icon={faCartArrowDown} className={styles.shoppingHistoryIcon} />
      </div>
      <ShoppingHistoryList history={history}/>
    </section>
  );
};

export default ShoppingHistory;
