import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Debtors from "./pages/Debtors";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import AddCustomer from "./AddCustomer";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/deudores">
          <Debtors />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/deudores/nuevocliente">
          <AddCustomer />
        </Route>
        <Route exact path="/*">
          <Error404 />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
