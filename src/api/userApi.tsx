import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/FirebaseConfig";

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve({
              // The user object has basic properties such as display name, email, etc.
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              id: user.uid,
            });
          }
        });
      }, 500);
    });
  },
};

export default userApi;
