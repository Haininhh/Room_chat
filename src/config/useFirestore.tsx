import { collection, query, where, WhereFilterOp } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export interface Condition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string;
}

const useFirestore = (condition: Condition) => {
  if (!condition) return;
  if (!condition.value || !condition.value.length) return;
  let collectionRef = query(
    collection(db, "rooms"),
    where(condition.fieldName, condition.opStr, condition.value)
  );
  return collectionRef;
};

export default useFirestore;
