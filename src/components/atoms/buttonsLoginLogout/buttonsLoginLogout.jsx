/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonsLoginLogout = ({ source, buttonName }) =>
  <li className='buttonMenu'>
    <NavLink className='buttons-menu-item' to={source}>{buttonName}</NavLink>
  </li>

export default ButtonsLoginLogout