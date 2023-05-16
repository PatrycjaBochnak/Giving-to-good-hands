import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
      <nav className="navbar">
       <Link className="start" to="/">
        Start
       </Link>
       <Link className="about-project" to="/">
        What is goin in? 
       </Link>
       <Link className="about-us" to="/">
        About us
       </Link>
       <Link className="contact" to="/">
        Contact
       </Link>
      </nav>
  );
};

export default Navbar