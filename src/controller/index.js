import { createNewUser, signInUser } from "../model";
import { renderErrorMessage } from "../view/index";
// import { createNewUser } from "../model/index";
export let validateLoginInfo = (email, password) => {
  // regex, regular expression
  // email regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!email) {
    renderErrorMessage("err-email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-email", "Invalid email");
  } else {
    renderErrorMessage("err-email", "");
  }

  if (!password) {
    renderErrorMessage("err-pass", "Please enter your password");
  } else {
    renderErrorMessage("err-pass", "");
  }
  if (email && password) {
    signInUser(email, password);
  }
  // if(email&&password===password){
  //   createUserWithEmailAndPassword(email,password)
  // }
};

export let validateregisPagesInfo = (email1) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email1) {
    renderErrorMessage("err-email1", "Please enter your email");
  } else if (!emailRegex.test(email1)) {
    renderErrorMessage("err-email1", "Invalid email");
  } else {
    renderErrorMessage("err-email1", "");
  }
};

export let validateresetInfo = (
  firstname,
  lastname,
  email,
  password,
  confirm
) => {
  if (!firstname) {
    renderErrorMessage("first-name", "Please enter your firstname");
  } else {
    renderErrorMessage("first-name", "");
  }
  // -------
  if (!lastname) {
    renderErrorMessage("last-name", "Please enter your lastname");
  } else {
    renderErrorMessage("last-name", "");
  }
  // -------
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("email-address", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-address", "Invalid email");
  } else {
    renderErrorMessage("email-address", "");
  }
  // -------
  if (!password) {
    renderErrorMessage("passworld-one", "Please enter your password");
  } else {
    renderErrorMessage("passworld-one", "");
  }
  // -------
  if (!confirm) {
    renderErrorMessage(
      "confirm-passworld",
      "Please enter your confirm password"
    );
  } else if (confirm !== password) {
    renderErrorMessage("confirm-passworld", "Not the same password");
  } else {
    renderErrorMessage("confirm-passworld", "");
  }
  if (firstname && lastname && email && password && confirm === password) {
    createNewUser(firstname, lastname, email, password);
  }
};
