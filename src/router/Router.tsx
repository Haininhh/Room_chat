import Signup from "../features/signup/Signup";
import Login from "../features/login/Login";
import ForgotPassword from "../features/forgotPassword/ForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-pwrd" component={ForgotPassword} />
        {/* <Route path="/" component={Login} /> */}
      </Switch>
    </Router>
  );
};
