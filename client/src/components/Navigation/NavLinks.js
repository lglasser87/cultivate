import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLinks(props) {
    return <ul>
        <li>
            <NavLink to="/" exact>Dashboard <img src={require('../Images/cultivate.png')} /></NavLink>
        </li>
        <li>
            <NavLink to="/plants">Plants List <FontAwesomeIcon icon={['fas', 'seedling']} /></NavLink>
        </li>
        <li>
            <NavLink to="/favorites">My Favorites <FontAwesomeIcon icon={['fas', 'heart']} /></NavLink>
        </li>
        <li>
            <NavLink to="/blogs">My Blogs <FontAwesomeIcon icon={['fas', 'blog']} /></NavLink>
        </li>
        <li>
            <NavLink to="/login">Login <FontAwesomeIcon icon={['fas', 'sign-in-alt']} /></NavLink>
        </li>
        <li>
            <NavLink to="/signup">Register <FontAwesomeIcon icon={['fas', 'user-plus']} /></NavLink>
        </li>
    </ul>
}

export default NavLinks;