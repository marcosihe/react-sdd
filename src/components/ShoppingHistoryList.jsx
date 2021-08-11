import React from 'react'
import { ListGroup } from 'react-bootstrap'
import styles from '../css/ShoppingHistoryList.module.css'

const ShoppingHistoryList = (props) => {
    //const { shoppingHistoryList } = props;
    // Arreglo de prueba
    const shoppingHistoryList = [
        {
            debt: 670,
            concept: "Frutas, Gaseosa Coca Cola y chocolates",
            date: "17/05/2021",
            id: 1
          },
          {
            debt: 370,
            concept: "Gaseosa Coca Cola y chocolates",
            date: "10/05/2021",
            id: 2
          },
          {
            debt: 170,
            concept: "chocolates",
            date: "04/05/2021",
            id: 3
          }
    ];
    return (
        <ListGroup>
            {
                shoppingHistoryList.map( (item) => (
                    <ListGroup.Item key={item.id}>
                        <p>Compra: <span className={styles.itemAmount}>$ {item.debt}</span></p>
                        <p>Concepto: {item.concept}</p>
                        <p>Fecha: {item.date}</p>
                    </ListGroup.Item>
                ) )
            }
        </ListGroup>
    )
}

export default ShoppingHistoryList
