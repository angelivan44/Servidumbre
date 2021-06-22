import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBgizUYYyfOvwD4QvARWzvY9SnbBuao3W4",
  authDomain: "servipy-a9b84.firebaseapp.com",
  projectId: "servipy-a9b84",
  storageBucket: "servipy-a9b84.appspot.com",
  messagingSenderId: "726828521269",
  appId: "1:726828521269:web:ef3cdc6a066f21966e5e7c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fire = firebase;
export { fire  }