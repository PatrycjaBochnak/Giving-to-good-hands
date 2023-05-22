import React from "react";
import ButtonsLoginLogout from '../../atoms/buttonsLoginLogout'

const NavLoginLogout = () => 
<ul className="button-menu-list">
    <ButtonsLoginLogout source='login' buttonName='login' />
    <ButtonsLoginLogout source ='register' buttonName='register' />
</ul>

export default NavLoginLogout