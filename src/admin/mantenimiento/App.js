import React from "react";
import Clientes from "./clientes/Clientes";
import Aside from "./components/Aside";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Citas from "./citas/Citas";
import {Mantenimiento} from "./mantenimiento/Mantenimiento";

const App = () => {
  return (
    <Router>
      <Header />
      <Aside />
      <Switch>
        <Route path={"/clientes"} component={Clientes} />
        <Route path={"/citas"} component={Citas} />
        <Route path={"/mantenimiento"} component={Mantenimiento} />
      </Switch>
    </Router>
  );
};

export default App;
