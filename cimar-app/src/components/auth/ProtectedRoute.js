import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CimarContext } from "../../context/CimarContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(CimarContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/login" {...props} />
        )
      }
    />
  );
};
