import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../config/FirebaseConfig";
import routes from "../routes/Route";
import "./App.css";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        history.push("/");
        return;
      }
      try {
        const { displayName, email, uid, photoURL } = user;
        if (displayName && email && uid && photoURL) {
          localStorage.setItem("name", displayName);
          localStorage.setItem("email", email);
          localStorage.setItem("photoURL", photoURL);
          localStorage.setItem("uid", uid);
        }
        history.push("/room-chat");
      } catch (error) {
        console.log("Failed to login ", error);
      }
    });
    return () => unregisterAuthObserver();
  }, [history]);

  return <div className="content-app">{routes}</div>;
};

export default App;
