import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHTmLOXAtWEOpFGflWY5hE9dBWq4-Hqvs",
  authDomain: "cimar-9b847.firebaseapp.com",
  databaseURL: "https://cimar-9b847.firebaseio.com",
  projectId: "cimar-9b847",
  storageBucket: "cimar-9b847.appspot.com",
  messagingSenderId: "768307837937",
  appId: "1:768307837937:web:40edf31eba0ada622ce250",
  measurementId: "G-2TSVZ88MF5",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth, firebase as default };
