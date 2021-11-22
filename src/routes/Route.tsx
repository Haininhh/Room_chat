import { Route, Switch } from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import ForgotPassword from "../features/forgotPassword/ForgotPassword";
import Login from "../features/login/Login";
import RoomChat from "../features/roomchat";
import Signup from "../features/signup/Signup";
import SignupSuccess from "../features/signup/SignupSuccess";
import PrivateRoute from "./PrivateRoute";

const routes = (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-psrd" component={ForgotPassword} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/room-chat" component={RoomChat} />
      <Route path="/signup-success" component={SignupSuccess} />
    </Switch>
  </div>
);

export default routes;
