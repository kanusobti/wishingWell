import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAt4yufWIh_TYIJlvdInhj6jeNZ595xV-0",
    authDomain: "wishing-well-caf4a.firebaseapp.com",
    databaseURL: "https://wishing-well-caf4a.firebaseio.com",
    projectId: "wishing-well-caf4a",
    storageBucket: "",
    messagingSenderId: "776526826009",
    appId: "1:776526826009:web:ab1f669e8de133a70fb888"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
