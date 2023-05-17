import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const ButtonsMenu = ({ source, linkName }) => (
  <li className="button-item">
    <Link
      className="button"
      activeClass="active"
      to={source}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      {linkName}
    </Link>
  </li>
);

export default ButtonsMenu;
