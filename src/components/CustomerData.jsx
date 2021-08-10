import React from "react";
import styles from "../css/CustomerData.module.css";
import { faMapPin, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerData = (props) => {
  const { name, lastName, nickName, phoneNumber, address } = props;
  return (
    <>
      <h2>
        {lastName}Herrera, Marcos Ezequiel{name}
      </h2>
      <p className={styles.nickName}>
      {nickName !== "" ? (
        `(${nickName})`
      ) : "(...)"}</p>
      <hr className={styles.hrCustomerData} />
      <p className={styles.dataParagraph}>
        Celular: 
        {phoneNumber !== '' ? ` ${phoneNumber} ` : ` - `}
        
        <FontAwesomeIcon icon={faMobileAlt} className={styles.mobileAltIcon} />
      </p>

      {address !== "" ? (
        <p className={styles.dataParagraph}>
          Domicilio:
          {address !== '' ? ` ${address} ` : ` - `}
          <FontAwesomeIcon icon={faMapPin} className={styles.mapPinIcon} />
        </p>
      ) : null}
    </>
  );
};

export default CustomerData;
