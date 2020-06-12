import React from "react";
import "./MainNav.css";
// import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks"

function MainNav(props) {
    return <MainHeader id="main-header">
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  }
  
  export default MainNav;