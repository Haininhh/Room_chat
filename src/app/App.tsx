import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../config/FirebaseConfig";
import routes from "../routes/Route";
import { User } from "../store/assign";
import { useAppDispatch } from "../store/store";
import { getUser } from "../store/userSlice";
import "./App.css";

const App = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      const { displayName, email, uid, photoURL }: User = user;
      await dispatch(getUser({ displayName, email, uid, photoURL }));
      history.push("/room-chat");
    });
    return () => unregisterAuthObserver();
  }, [history, dispatch]);

  return <div className="content-app">{routes}</div>;
};

export default App;
