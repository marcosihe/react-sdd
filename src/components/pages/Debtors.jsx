import React from "react";
import { Container } from "react-bootstrap";
import CustomersList from "../CustomersList";
import Search from '../Search';
import Order from '../Order';
import styles from '../css/Debtors.module.css';

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
    },
    {
      id: "xc45876as",
      name: "Luciano",
      lastName: "Darín",
      nickName: "El chino",
      phoneNumber: "3815474747",
      currentDebt: 1254,
      address: "Bº PiedraBuena",
    },
    {
      id: "xc45878as",
      name: "María",
      lastName: "Stoessel",
      nickName: "La chavela",
      phoneNumber: "3812747484",
      currentDebt: 2315,
      address: "Honduras 1254",
    }
  ] 
  return (
    <Container>
      <section className={styles.searchingSection}>
        <Search/>
        <Order/>
      </section>
      <CustomersList customersList={exampleArray}/>
    </Container>
  );
};

export default Debtors;
