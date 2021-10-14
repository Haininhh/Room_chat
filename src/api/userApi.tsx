import { auth } from "../config/FirebaseConfig";

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;
      resolve({
        id: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        photoUrl: currentUser.photoURL,
      });
    });
  },
};

export default userApi;
