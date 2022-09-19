import "./style.css";
import img from "./pic/img.jpg";

export let loginPages = /*html*/ `
<div class="infoot">
    <div class="infoot-one">
        <img src="${img}" alt="photo" class="img">
        <h3 class="poot">Sign in to Rikkei Chat</h3>
        <div id = "login-one"></div>
        <div id = "login-nice"></div>
        <form class="chailen" id="dangnhap">
            <div class="footer" ></div>
            <p class="kitu">Email address</p>
            <input type="email" class="input" placeholder="Please enter your email" name="email">
            <div id="err-email" class="err-email"></div>
            <p class="kitu">Password</p>
            <input type="password" class="input" placeholder="Please enter your password" name = "password">
            <div id="err-pass"></div>
            <button class="chu0">Login</button>
            <div id = "login-dung" ></div>
        </form>
        <button id="pewpew">New to Rikei chat? Create an account</button>
        <button id="chu1">Forget your password? Click here</button>
    </div>
</div>

`;
