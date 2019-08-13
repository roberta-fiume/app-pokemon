import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyBZDZUh6JT8BOJiLL_AVX9m5VIUwFgDjhQ",
    authDomain: "pokemons-app-dbb45.firebaseapp.com",
    databaseURL: "https://pokemons-app-dbb45.firebaseio.com",
    projectId: "pokemons-app-dbb45",
    storageBucket: "pokemons-app-dbb45.appspot.com",
    messagingSenderId: "454392824763",
    appId: "1:454392824763:web:58ce3d93594da793"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;


  