import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./app.scss";
import { LoginPageContainer } from "_old_react/src/features/auth/pages/login/login.container";
import ProtectedRoute from "_old_react/src/features/common/protected-route/protected-route.component";
import TreeDetailsComponent from "_old_react/src/features/family-tree/pages/tree-details/tree-details.component";

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPageContainer />
      </Route>
      <ProtectedRoute exact path="/trees/:id">
        <TreeDetailsComponent />
      </ProtectedRoute>
      <Redirect to="/trees" />
    </Switch>
  );
}

export default App;
