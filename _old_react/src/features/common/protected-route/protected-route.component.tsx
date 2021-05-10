import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AuthSelectors } from "../../../store/features/auth/auth.selectors";
import { RootStoreModel } from "../../../store/root.model";

interface ProtectedRouteProps extends RouteProps {
  loggedIn: boolean;
}

const ProtectedRoute = ({ children, ...rest }: ProtectedRouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      rest.loggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default connect((state: RootStoreModel) => ({
  loggedIn: AuthSelectors.selectIsLoggedIn(state),
}))(ProtectedRoute);
