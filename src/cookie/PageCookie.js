import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./login.css";

export default function PageCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(["isLogin"]);

    function createCookie() {
        setCookie("isLogin", "Credential Login", { path: "/" });
    }

    return (
        <div class="login_container">
            <div class="center">
                <h1>Login</h1>
                <form method="POST">
                    <div class="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div class="pass">Forgor Password?</div>
                    <Link to="/home">
                        <button
                            className="button-login"
                            type="submit"
                            onClick={createCookie}
                        >
                            Login
                        </button>
                    </Link>
                    <div class="signup_link">
                        Not a member? <a href="#">SignUp</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
