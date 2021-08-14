import React from 'react'
import { faDatabase, faUserTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../css/DeletedCustomerView.module.css';

const DeletedCustomerView = () => {
    return (
        <div className={styles.deletedCustomerViewContainer}>
            <div className={styles.deletedCustomerViewIconsContainer}>
                <FontAwesomeIcon icon={faUserTimes} alt="Logo de usuario eliminado" className={styles.deletedCustomerViewIcon}/>
                <FontAwesomeIcon icon={faDatabase} alt="Logo de base de datos" className={styles.deletedCustomerViewIcon}/>
            </div>
            <p className={styles.deletedCustomerViewText}>Cliente eliminado de la base de datos.</p>
        </div>
    )
}

export default DeletedCustomerView
