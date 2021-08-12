import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from "../css/ShoppingHistoryList.module.css";

const ShoppingHistoryList = ({ history }) => {
/* En el primer render, history toma el valor undefined pero luego 
* almacena en sí los datos de la DB y deja de ser undefined
*/
  return (
    <ListGroup>
      {history
        ? history.map((item) => (
            <ListGroup.Item key={item.id_operation}>
              <p>
                Compra: <span className={styles.itemAmount}>$ {item.debt}</span>
              </p>
              <p>Concepto: {item.concept}</p>
              <p>Fecha: {item.date}</p>
            </ListGroup.Item>
          ))
        : null}
    </ListGroup>
  );
};

export default ShoppingHistoryList;
