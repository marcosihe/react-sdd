import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from './css/AddCustomerButton.module.css'

const AddCustomerButton = () => {
    return (
        <Button variant="outline-success">
            <Link to={`/deudores/nuevocliente`} className={styles.buttonLink}>Nuevo Cliente</Link>
        </Button>
    )
}

export default AddCustomerButton
