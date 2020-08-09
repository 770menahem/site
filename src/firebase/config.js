import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBmIkmivreC2NJv_zrT1syHbL65wOdAE0g",
  authDomain: "sort-image.firebaseapp.com",
  databaseURL: "https://sort-image.firebaseio.com",
  projectId: "sort-image",
  storageBucket: "sort-image.appspot.com",
  messagingSenderId: "1058960242365",
  appId: "1:1058960242365:web:0dc0372adf49aa21a4a9d4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectDB = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectDB, timestamp };
