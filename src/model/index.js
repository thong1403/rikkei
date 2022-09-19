import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { renderErrorMessage, setActiveScreen } from "../view/index";

export let createNewUser = (firstname, lastname, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password, firstname, lastname)
    .then((userCredential) => {
      console.log(userCredential.user);
      renderErrorMessage("server-suc-message", "Đăng ký thành công");
      setActiveScreen("loginPages");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      renderErrorMessage("server-err-message", err.message);
    });
};

export let signInUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // renderErrorMessage("login-one", "Đăng nhập thành công");
      alert("Đăng nhập thành công");

      setActiveScreen("chatPages");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

    });
};
