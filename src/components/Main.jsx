import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Debtors from "./pages/Debtors";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import AddCustomer from "./AddCustomer";
import { apiRequest } from "../helpers/apiRequest";
import CustomerDetails from "./CustomerDetails";

const Main = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    apiRequest(setCustomers);
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/deudores">
          <Debtors customers={customers}/>
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/deudores/nuevocliente">
          <AddCustomer setCustomers={setCustomers}/>
        </Route>
        <Route exact path="/deudores/detalles/:id">
          <CustomerDetails/>
        </Route>
        <Route exact path="/*">
          <Error404 />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
