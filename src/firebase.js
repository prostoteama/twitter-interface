import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvJaVBcLbZDgpcqKi2Sw9_EmUwxul2mxI",
  authDomain: "test-firebase-8f7f4.firebaseapp.com",
  databaseURL: "https://test-firebase-8f7f4.firebaseio.com",
  projectId: "test-firebase-8f7f4",
  storageBucket: "test-firebase-8f7f4.appspot.com",
  messagingSenderId: "79536090054",
  appId: "1:79536090054:web:fa1bbd3d2e79cbc10ce0c7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
