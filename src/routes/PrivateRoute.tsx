import React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem("name"));
  if (!isLoggedIn) return <Redirect to="/" />;
  return <Route {...props} />;
};

export default PrivateRoute;
