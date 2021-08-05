import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./css/Order.module.css";

const Order = () => {
  return (
    <div className={styles.orderDropdownButton}>
      <DropdownButton
        id="dropdown-basic-button"
        title="Ordenar por"
        variant="secondary"
      >
        <Dropdown.Item href="#/action-1">Alfabéticamente</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mayor deuda</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Menor deuda</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Última modificación</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Order;
