import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../css/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navBar}>
      <Container>
        <Navbar.Brand href="#">
          Mi Negocio
          <span>
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              className={styles.holdingUsdIcon}
              size="2x"
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact={true} to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink exact={true} to="/deudores" className="nav-link">
              Deudores
            </NavLink>
            <NavLink exact={true} to="/contacto" className="nav-link">
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
