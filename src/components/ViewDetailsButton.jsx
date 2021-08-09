import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/ViewDetailsButton.module.css'

const ViewDetailsButton = () => {
    return (
        <Button type="button" variant="outline-secondary">
          <span>Ver detalle </span>
          <FontAwesomeIcon
            alt="Ícono de 'ver detalles'"
            icon={faEye}
            className={styles.viewDetailsIcon}
          />
        </Button>
    )
}

export default ViewDetailsButton
