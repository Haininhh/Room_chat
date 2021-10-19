import { db } from "./FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { UserRef } from "../features/login/Login";

export const addDocument = (data: UserRef) => {
  addDoc(collection(db, "users"), {
    ...data,
    createAt: Timestamp.fromDate(new Date()),
  });
};
