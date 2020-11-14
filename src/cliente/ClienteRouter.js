import React from "react";
import {Route, Switch} from "react-router-dom";
import Blog from "./components/blogComponents/Blog";
import ClienteHome from "./components/ClienteHome";
import PerfilCliente from "./components/perfilComponents/PerfilCliente";

const ClienteRouter = () => {
  return (
    <>
      <Switch>
        <Route path={"/cliente/home"} component={ClienteHome} />
        <Route path={"/cliente/perfil"} component={PerfilCliente} />
        <Route path={"/cliente/blog"} component={Blog} />
      </Switch>
    </>
  );
};

export default ClienteRouter;
