import "./resetPassworld.css";
import img from "./pic/img.jpg";

export let resetPassworldPage = /*html*/ `<div class="diss-to">
<div class="fader">
   
        <img src="${img}" alt="photo" class="img">
        <h4 class="pots-chi">Create new account</h4>
        <div class="err" id="server-suc-message"></div>
        <div class="err" id="server-err-message"></div>
    <form class="bost" id="dangky">
        <p class="chu3">First Name</p>
        <input type="text" class="input-one" placeholder="Please enter your first name" name = "firstName">
        <div id = "first-name" ></div>
        <p class="chu3">Last Name</p>
        <input type="text" class="input-one" placeholder="Please enter your Last Name" name = "lastName">
        <div id = "last-name"></div>
        <p class="chu3">Email address</p>
        <input type="text" class="input-one" placeholder="Please enter your Email address" name = "email">
        <div id = "email-address"></div>
        <p class="chu3">Password </p>
        <input type="password" class="input-one" placeholder="Please enter your Password " name = "passworld">
        <div id="passworld-one"></div>
        <p class="chu3">Confirm Password </p>
        <input type="password" class="input-one" placeholder="Please enter your Confirm Password " name ="confirmPassworld">
        <div id="confirm-passworld"></div>
        <button class="dangky">Register</button>
    </form>
    <button class="fitter">Already have an account ? Login here</button>
</div>
</div>`;
