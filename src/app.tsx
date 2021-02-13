import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import { LoginPageContainer } from "./features/auth/pages/login/login.container";
import ProtectedRoute from "./features/common/protected-route/protected-route.component";
import TreeDetailsComponent from "./features/family-tree/pages/tree-details/tree-details.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPageContainer />
        </Route>
        <ProtectedRoute exact path="/trees/:id">
          <TreeDetailsComponent />
        </ProtectedRoute>
        <Redirect to="/trees" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
