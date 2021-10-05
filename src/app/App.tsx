import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../features/login/Login";
import Signup from "../features/signup/Signup";
import ForgotPassword from "../features/forgotPassword/ForgotPassword";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-psrd" component={ForgotPassword} />
          {/* <Route path="/" component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
