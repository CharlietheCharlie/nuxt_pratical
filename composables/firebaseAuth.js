import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email,password) => {
  const auth = getAuth();
  const firebaseError = useFirebaseError();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    // 註冊失敗
    firebaseError.value = error.code;
    setTimeout(()=>{firebaseError.value = ""},3000);
  });
  return credentials;
};

export const signInUser = async (email,password) => {
  const auth = getAuth();
  let firebaseError = useFirebaseError();
  const credentials = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      // 登入失敗
      firebaseError.value = error.code
      setTimeout(()=>{firebaseError.value = ""},3000);

    });
    return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // 已登入
      
      console.log('sign in');
     
    } else {
      // 未登入
      console.log('log out')
    }
    firebaseUser.value = user;
  });
};

export const signOutUser = async()=>{
  const auth = getAuth();
  const result = await auth.signOut();
}

