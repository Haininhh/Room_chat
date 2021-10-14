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
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        history.push("/");
        return;
      }
      try {
        await dispatch(getMe());
        history.push("/room-chat");
      } catch (error) {
        console.log("Failed to login ", error);
        // show toast error
      }
    });
    return () => unregisterAuthObserver();
  }, [history, dispatch]);

  return <div className="content-app">{routes}</div>;
};

export default App;
