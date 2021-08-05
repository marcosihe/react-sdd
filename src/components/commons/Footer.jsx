import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../css/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.commonFooter}>
            <Container>
                <p>&copy; Todos los derechos reservados.</p>
            </Container>
        </footer>
    )
}

export default Footer
