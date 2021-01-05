import firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBv5v8CgadS9ZfJXXlFQ367ahPZpO6xt1k",
  authDomain: "react-firebase-5f9c7.firebaseapp.com",
  projectId: "react-firebase-5f9c7",
  storageBucket: "react-firebase-5f9c7.appspot.com",
  messagingSenderId: "951357510425",
  appId: "1:951357510425:web:a11df574fe498455652b88",
  measurementId: "G-K174DN8LWZ"
};

firebase.initializeApp(config);
export default firebase.database();
