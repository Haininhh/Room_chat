import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../config/FirebaseConfig";
import routes from "../routes/Route";
import { useAppDispatch } from "../store/hooks";
import { getMe } from "../store/userSlice";
import "./App.css";

const App = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      await dispatch(getMe());
      if (auth.currentUser) {
        history.push("/room-chat");
      }
      return;
    });
    return () => unregisterAuthObserver();
  }, [history, dispatch]);

  return <div className="content-app">{routes}</div>;
};

export default App;
