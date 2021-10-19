import {
  collection,
  getDocs,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { db } from "./FirebaseConfig";

const useFirestore = async (condition: {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string;
}) => {
  let collectionRef = query(
    collection(db, "rooms"),
    where("description", "==", "Hà Nội")
  );
  // if (condition) {
  // if (!condition.value || !condition.value.length) return;
  const querySnapshot = await getDocs(collectionRef);

  // const documents = querySnapshot.forEach((doc) => {
  //   console.log(doc.id);
  //   const id = doc.id;
  //   return id;
  // });
  // console.log(querySnapshot);
  return querySnapshot;
  // }
};

export default useFirestore;
