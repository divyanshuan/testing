// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQuXouWj-ZWcqcG3ikMQqmGgO1lrlaZSA",
  authDomain: "registration-demo-d1052.firebaseapp.com",
  projectId: "registration-demo-d1052",
  storageBucket: "registration-demo-d1052.appspot.com",
  messagingSenderId: "848649869045",
  appId: "1:848649869045:web:fe7e4b86cc27b9bf3557bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};
