/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import LogInLogOutRegisterDatabaseContext from '../../context/loginLogoutRegisterDatabaseContext'

const ButtonsLogout = () => {
  const { logoutHandle } = useContext(LogInLogOutRegisterDatabaseContext)
  return (
    <li className='buttonMenu-item'><button onClick={e => logoutHandle(e)} className='button-menu'>Wyloguj</button></li>
  )
}

export default ButtonsLogout