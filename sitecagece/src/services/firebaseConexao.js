import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyByTyW6dEmfvq56Isw_W9bhK_3wSKqANFQ",
    authDomain: "testecagece-326a4.firebaseapp.com",
    projectId: "testecagece-326a4",
    storageBucket: "testecagece-326a4.appspot.com",
    messagingSenderId: "863806457585",
    appId: "1:863806457585:web:d74c34f8b157724f74cb50"
  };
  // Initialize Firebase
  if(firebase.apps.length0){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
