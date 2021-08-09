import React from 'react'
import { Container } from 'react-bootstrap'
import CustomerForm from './CustomerForm'
import styles from '../css/AddCustomer.module.css'

const AddCustomer = ({setCustomers}) => {

    return (
        <Container>
            <h1 className={styles.addCustomerTitle}>Agregar nuevo cliente</h1>
            <CustomerForm setCustomers={setCustomers}/>
        </Container>
    )
}

export default AddCustomer
