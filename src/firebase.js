import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG-o3JsFWMe8myr5B4NBU9MMg-w4cOwpM",
    authDomain: "fir-ad412.firebaseapp.com",
    projectId: "fir-ad412",
    storageBucket: "fir-ad412.appspot.com",
    messagingSenderId: "334818114455",
    appId: "1:334818114455:web:0cf2c0faa62980aad362d2",
    measurementId: "G-WJFSC1X1FS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};