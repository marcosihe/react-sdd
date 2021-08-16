import React, { useState } from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import NewPurchaseModal from "./NewPurchaseModal";

const AddDebtButton = ({ text }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Button variant="outline-danger" onClick={handleShow} className="">
        {text ? (
          <span>Nueva Compra</span>
        ) : (
          <FontAwesomeIcon
            icon={faCartArrowDown}
            alt="Logo de carro de compras"
          />
        )}
      </Button>

      <NewPurchaseModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddDebtButton;
