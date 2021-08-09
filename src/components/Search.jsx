import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import styles from "../css/Search.module.css";

const Search = () => {
  return (
    <section>
      <div className={styles.debtorsSearchingForm}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Juan Pérez"
            className={styles.searchingInput}
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </div>
    </section>
  );
};

export default Search;
