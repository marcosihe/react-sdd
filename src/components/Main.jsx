import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Deudores from "./pages/Deudores";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/deudores">
          <Deudores />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route exact path="/*">
          <Error404 />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
