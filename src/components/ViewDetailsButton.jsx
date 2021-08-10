import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/ViewDetailsButton.module.css'

const ViewDetailsButton = ({id}) => {
    return (
        <Link to={`/deudores/detalles/:${id}`} className="btn btn-outline-secondary">
          <span>Ver detalle </span>
          <FontAwesomeIcon
            alt="Ícono de 'ver detalles'"
            icon={faEye}
            className={styles.viewDetailsIcon}
          />
        </Link>
    )
}

export default ViewDetailsButton
