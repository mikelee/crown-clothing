import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGpYTN16qC-wzZDZf_XTSd36VUFCPZcQo",
    authDomain: "crown-clothing-a9240.firebaseapp.com",
    databaseURL: "https://crown-clothing-a9240.firebaseio.com",
    projectId: "crown-clothing-a9240",
    storageBucket: "",
    messagingSenderId: "387875515713",
    appId: "1:387875515713:web:67fd8c2cbdf285d9f105c0"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;