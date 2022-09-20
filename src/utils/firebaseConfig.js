// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1w47sdwxrrS661cgvcjJYZlj9z7c2TrA",
  authDomain: "proyecto-firebase-940b8.firebaseapp.com",
  projectId: "proyecto-firebase-940b8",
  storageBucket: "proyecto-firebase-940b8.appspot.com",
  messagingSenderId: "4075572406",
  appId: "1:4075572406:web:1991dde471f08ea4822a17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getData = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "items"))
      .then((querySnapshot) => {
        const items = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(items);
        console.log(items);
      })
      .catch((err) => {
        console.error("error searching items" + err);
      });
  });
};
