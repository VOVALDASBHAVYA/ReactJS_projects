// import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

// const config = {
//   apiKey: "AIzaSyDXMVSoqUMTf3N_kzWAUANcsxOKnz-eAZ0",
//   authDomain: "secondproj-d4aaa.firebaseapp.com",
//   databaseURL: "",
//   projectId: "secondproj-d4aaa",
//   storageBucket: "secondproj-d4aaa.appspot.com",
//   messagingSenderId: "626129770261"
// };
// firebase.initializeApp(config);

// firebase.firestore().settings(settings);

// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXMVSoqUMTf3N_kzWAUANcsxOKnz-eAZ0",
  authDomain: "secondproj-d4aaa.firebaseapp.com",
  projectId: "secondproj-d4aaa",
  storageBucket: "secondproj-d4aaa.appspot.com",
  messagingSenderId: "626129770261",
  appId: "1:626129770261:web:2b1eff8e681d099bca7b1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);