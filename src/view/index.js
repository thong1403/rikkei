import { resetPassworldPage } from "../pages/resetPassworldPage/reset";
import { loginPages } from "../pages/loginPages/login";
import { chatPages } from "../pages/chatPages/chat";
import { registerPages } from "../pages/registerPages/register";
import { validateLoginInfo } from "../controller/index";
import { validateregisPagesInfo } from "../controller/index";
import { validateresetInfo } from "../controller/index";

export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPages":
      if (app) {
        app.innerHTML = loginPages;
      }
      const loginForm = document.getElementById("dangnhap");
      if (loginForm) {
        console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const email = loginForm.email.value;
          const password = loginForm.password.value;
          validateLoginInfo(email, password);
        });
        const button = document.getElementById("pewpew");
        button.addEventListener("click", function () {
          setActiveScreen("dangky");
        });
        const nutDangKy = document.getElementById("chu1");
        nutDangKy.addEventListener("click", function () {
          setActiveScreen("registerPages");
        });
      }
      break;
    case "registerPages":
      if (app) {
        app.innerHTML = registerPages;
      }
      const registerForm = document.getElementById("registerP");
      if (registerForm) {
        console.log(registerForm);
        registerForm.addEventListener("submit", (event1) => {
          event1.preventDefault();

          const email = registerForm.email.value;
          console.log(email);

          validateregisPagesInfo(email);
        });
      }
      break;
    case "chatPages":
      if (app) {
        app.innerHTML = chatPages;
      }
      break;
    case "resetPassworldPage":
      if (app) {
        app.innerHTML = resetPassworldPage;
      }
      const resetPassworld = document.getElementById("dangky");
      if (resetPassworld) {
        console.log(resetPassworld);
        resetPassworld.addEventListener("submit", (event1) => {
          event1.preventDefault();

          const firstName = resetPassworld.firstName.value;
          const lastName = resetPassworld.lastName.value;
          const email = resetPassworld.email.value;
          const password = resetPassworld.passworld.value;
          const confismPass = resetPassworld.confirmPassworld.value;

          validateresetInfo(firstName, lastName, email, password, confismPass);
        });
      }
      break;
    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
