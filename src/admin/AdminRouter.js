import React from "react";
import {Route, Switch} from "react-router-dom";
import Citas from "./adminCitas/Citas";
import Clientes from "./adminClientes/Clientes";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Mantenimiento from "./mantenimiento/Mantenimiento";

const AdminRouter = () => {
  return (
    <>
      <Header />
      <Aside />
      <Switch>
        <Route path={"/admin/clientes"} component={Clientes} />
        <Route path={"/admin/citas"} component={Citas} />
        <Route path={"/admin/mantenimiento"} component={Mantenimiento} />
      </Switch>
    </>
  );
};

export default AdminRouter;
