import * as firebase from "firebase";
import { firebaseapp } from "./Firebase";

export const validarsesion = (setvalidarsesion) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     setvalidarsesion(true);
    } else {
      console.log("no ha iniciado sesion");
    }
  });
};

export const cerrarsesion = () => {
  firebase.auth().signOut();
};

export const validarPhone = (setphoneauth) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user.phoneNumber) 
    {
        setphoneauth(true);
    }
  });
};
