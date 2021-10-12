// import React, { useEffect } from "react";
// import { auth } from "../config/FirebaseConfig";
// import { onAuthStateChanged } from "@firebase/auth";
// import { useHistory } from "react-router-dom";

// const AuthProvider = () => {
//   const history = useHistory();
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       console.log({ user });
//       if (user) {
//         history.push("/room-chat");
//         return;
//       }
//       history.push("/");
//     });
//     return () => unsubscribed();
//   }, [history]);
//   return <div></div>;
// };

// export default AuthProvider;
export {};
