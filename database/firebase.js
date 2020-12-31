import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAdvfzVp5VRqt3wRApY-A8yuynkFmL68nY",
  authDomain: "react-native-firebase-721c0.firebaseapp.com",
  projectId: "react-native-firebase-721c0",
  storageBucket: "react-native-firebase-721c0.appspot.com",
  messagingSenderId: "1023164696575",
  appId: "1:1023164696575:web:08ec18c7db119c6f3049ca",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
