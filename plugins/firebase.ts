// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: useRuntimeConfig().public.FIREBASE_API_KEY,
    authDomain: "nuxt-praticaltools.firebaseapp.com",
    projectId: "nuxt-praticaltools",
    storageBucket: "nuxt-praticaltools.appspot.com",
    messagingSenderId: "1012841630853",
    appId: "1:1012841630853:web:7eb3017edff 275a79fadec",
    measurementId: "G-HBD3C84BZE"
  };
  //
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  initUser();
  const firestoreDb = getFirestore(firebaseApp);
  return{
    provide:{
        firestoreDb
    }
  }
})
