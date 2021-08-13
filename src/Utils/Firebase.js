import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBbGW9he6uwWoG1lX20qYDiDu3mGJqdg7Q",
    authDomain: "whatscommerce-db.firebaseapp.com",
    projectId: "whatscommerce-db",
    storageBucket: "whatscommerce-db.appspot.com",
    messagingSenderId: "969647467121",
    appId: "1:969647467121:web:7aff4522e42302f13d89d0"
  };
  // Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);