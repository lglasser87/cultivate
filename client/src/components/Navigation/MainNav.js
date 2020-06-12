import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks"

function MainNav(props) {
    return <MainHeader>
      <h1>
        <Link to="/">
          Cultivate
        </Link>
        <img src={require('../Images/cultivate.png')} />
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  }
  
  export default MainNav;