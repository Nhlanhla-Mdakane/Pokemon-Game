import React from "react";
import { Link } from "react-router-dom";

import navMain from "./images/header/navMain.png";
import side1 from "./images/header/side1.png";
import side2 from "./images/header/side2.png";
// this is the nav

class Nav extends React.Component {
  render() {
    return (
      <div id="navDiv">
        <img className="header" id="side" src={side1} alt="ash and pikachu" />

        <img
          className="header"
          src={navMain}
          id="mainSide"
          alt="pokemon logo"
        />
        <img className="header" id="side" src={side2} alt=" pikachu with cap" />

        <ul>
          <li>
            <a href="/">level 1</a>
          </li>

          <li>
            <a href="/Level2">level 2</a>
          </li>

          <li>
            <a href="/Level3">level 3</a>
          </li>

          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
