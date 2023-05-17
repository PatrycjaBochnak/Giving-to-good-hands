import React from "react";
import ButtonsMenu from "../../atoms/buttonsMenu/buttonsMenu";

const Navbar = () => (
  <ul className="button-list">
    <ButtonsMenu source="header" linkName="Start" />
    <ButtonsMenu source="simple" linkName="What`s it?" />
    <ButtonsMenu source="about" linkName="About us" />
    <ButtonsMenu source="help" linkName="Foundations and organisations" />
    <ButtonsMenu source="contact" linkName="Contact" />
  </ul>
);

export default Navbar;
