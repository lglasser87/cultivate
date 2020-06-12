import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks(props) {
    return <ul>
        <li>
            <NavLink to="/" exact>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/plants">Plants List</NavLink>
        </li>
        <li>
            <NavLink to="/favorites">My Favorites</NavLink>
        </li>
        <li>
            <NavLink to="/blogs">My Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/signup">Register</NavLink>
        </li>
    </ul>
}

export default NavLinks;