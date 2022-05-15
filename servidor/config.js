const firebase=require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyA1Wy0G3-9jzNjEiqxZuLMxNJq55TFDESE",
  authDomain: "ecocity-8c653.firebaseapp.com",
  projectId: "ecocity-8c653",
  storageBucket: "ecocity-8c653.appspot.com",
  messagingSenderId: "362641906420",
  appId: "1:362641906420:web:189e3e6cf3b865d97e1ca1"
};

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();