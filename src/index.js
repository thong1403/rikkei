// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mPT7vx9QDPanCmlwXyH2bB0QqUVFHAs",
  authDomain: "chatpages-18e56.firebaseapp.com",
  projectId: "chatpages-18e56",
  storageBucket: "chatpages-18e56.appspot.com",
  messagingSenderId: "28437452957",
  appId: "1:28437452957:web:812eee9850611b2a3b5c74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);

// setActiveScreen("registerPages");
setActiveScreen("loginPages");
// setActiveScreen("chatPages");
// setActiveScreen("resetPassworldPage");
