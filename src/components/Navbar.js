import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className="nav-links">
            <h1>POKEDEX FROM POKEAPI</h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <p>Search</p>
            </Link>
        </div>
    );
}
