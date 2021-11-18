import React from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { selectUser } from "../store/userSlice";

const PrivateRoute = (props: RouteProps) => {
  const user = useAppSelector(selectUser);
  if (!user) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;
