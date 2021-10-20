import { collection, query, where, WhereFilterOp } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export interface Condition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string;
}

const useFirestore = (collections: string, condition: Condition | null) => {
  if (!condition) {
    const collectionRef = collection(db, collections);
    return collectionRef;
  }

  if (!condition.value || !condition.value.length) return;
  const collectionRef = query(
    collection(db, collections),
    where(condition.fieldName, condition.opStr, condition.value)
  );
  return collectionRef;
};

export default useFirestore;
