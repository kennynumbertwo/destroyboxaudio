import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8K6HugbZIXc53nToS3pFAfwAfggU8T78",
  authDomain: "mixing-website.firebaseapp.com",
  databaseURL: "https://mixing-website-default-rtdb.firebaseio.com",
  projectId: "mixing-website",
  storageBucket: "mixing-website.appspot.com",
  messagingSenderId: "796797292600",
  appId: "1:796797292600:web:3bcf255282b6819c38d6cd",
  measurementId: "G-S646GL9C04"
}

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
