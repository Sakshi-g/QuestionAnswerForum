// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDOTl8g14epunlgDjkt0y16jR3cJeiPAC4",
  authDomain: "qa-forum-b5e75.firebaseapp.com",
  projectId: "qa-forum-b5e75",
  storageBucket: "qa-forum-b5e75.appspot.com",
  messagingSenderId: "1041097506288",
  appId: "1:1041097506288:web:8adbbf7fd5a2e1ddf67135",
  measurementId: "G-NYRTRVT5ZN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
