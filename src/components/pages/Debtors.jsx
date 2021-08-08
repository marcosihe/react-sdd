import React from "react";
import { Container } from "react-bootstrap";
import CustomersList from "../CustomersList";
import Search from '../Search';
import Order from '../Order';
import styles from '../css/Debtors.module.css';
import AddCustomerButton from "../AddCustomerButton";

const Debtors = () => {
  const exampleArray = [
    {
      id: "xc45877as",
      name: "Marcelo",
      lastName: "Bianchi",
      nickName: "El pelao",
      phoneNumber: "381645454",
      currentDebt: 2450,
      address: "Bº Colombres",
      history: {
        operation_1: {
          debt: 120,
          concept: "Frutas: bananas y naranjas"
        },
        operation_2: {
          debt: 620,
          concept: "Frutas, leche y 1 bandeja de huevos"
        },
        operation_3: {
          debt: 370,
          concept: "Frutas, Gaseosa Coca Cola y chocolates"
        }
      }
    },
    {
      id: "xc45876as",
      name: "Luciano",
      lastName: "Darín",
      nickName: "El chino",
      phoneNumber: "3815474747",
      currentDebt: 1254,
      address: "Bº PiedraBuena",
      history: {
        operation_1: {
          debt: 220,
          concept: "Coca Cola"
        },
        operation_2: {
          debt: 120,
          concept: "Leche"
        },
        operation_3: {
          debt: 700,
          concept: "Fernet"
        }
      }
    },
    {
      id: "xc45878as",
      name: "María",
      lastName: "Stoessel",
      nickName: "La chavela",
      phoneNumber: "3812747484",
      currentDebt: 2315,
      address: "Honduras 1254",
      history: {
        operation_1: {
          debt: 300,
          concept: "Frutas y verduras"
        },
        operation_2: {
          debt: 600,
          concept: "Salame, queso, aceitunas y pre-pizzas"
        }
      }
    }
  ] 
  return (
    <Container>
      <section className={styles.searchingSection}>
        <Search/>
        <Order/>
        <AddCustomerButton/>
      </section>
      <CustomersList customersList={exampleArray}/>
    </Container>
  );
};

export default Debtors;
