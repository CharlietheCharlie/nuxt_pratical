import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp,
} from "firebase/firestore";

export const queryByCollection = async (
  firestoreDb,
  col: string,
  userId: ""
) => {
  const colRef = collection(firestoreDb, col);
  const snapshot = await getDocs(colRef);
  const docs = Array.from(snapshot.docs).map((doc) => {
    if (!userId) {
      return {
        ...doc.data(),
        id: doc.id,
      };
    }
    return doc.id === userId;
  });
  return docs;
};

export const set = async (firestoreDb, col: string, document: Object) => {
  await setDoc(doc(collection(firestoreDb, col)), document);
};

export const add = async (firestoreDb, col: string, document: Object,id:"") => {
    const colRef = collection(firestoreDb, col);  
  const docRef = await addDoc(colRef, document);
  return docRef;
};

export const del = async (firestoreDb, col, id) => {
  const docRef = doc(firestoreDb, col, id);
  return await deleteDoc(docRef);
};
