import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminRouter from "./admin/AdminRouter";
import ClienteRouter from "./cliente/ClienteRouter";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/admin"} component={AdminRouter} />
          <Route path={"/cliente"} component={ClienteRouter} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
