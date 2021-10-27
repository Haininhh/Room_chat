import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../config/FirebaseConfig";
import routes from "../routes/Route";
import { useAppDispatch } from "../store/hooks";
import { getMe } from "../store/userSlice";
import "./App.css";

const App = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [isSignInSuccess, setIsSignInSuccess] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { email } = user;
        if (!email) return;
        localStorage.setItem("email", email);
        await dispatch(getMe());

        if (email && isSignInSuccess === true) {
          history.push("/signup-success");
          setIsSignInSuccess(true);
        } else if (email && isSignInSuccess === false) {
          setIsSignInSuccess(false);
          history.push("/room-chat");
        }
        return;
      }
    });
    return () => unregisterAuthObserver();
  }, [history, dispatch, isSignInSuccess]);

  return <div className="content-app">{routes}</div>;
};

export default App;
