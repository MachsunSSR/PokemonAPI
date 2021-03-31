import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function PageCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(["isLogin"]);

    function createCookie() {
        setCookie("isLogin", "Credential Login", { path: "/" });
    }

    return (
        <div>
            <Link to="/home">
                <button onClick={createCookie}>Login</button>
            </Link>
        </div>
    );
}
