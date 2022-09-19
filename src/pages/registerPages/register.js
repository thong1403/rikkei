import "./registerPages.css";
import img from "./pic/img.jpg";

export let registerPages = /*html*/ `
<div class="water">
<div class="mater">
    <img src="${img}" alt="photo" class="img">
    <h4 class="mini">Reset your Password</h4>
    <form class="masterJi" id ="registerP">
        <p class="chu4">Email address</p>
        <input name="email" type="text" class="input-two" placeholder="please enter your email">
        <div id = "err-email1"></div>
        <button class="paass">Reset Password</button>
    </form>
    <div class="fitter">Already have an account ? Login here</div>
</div>
</div>
`;
