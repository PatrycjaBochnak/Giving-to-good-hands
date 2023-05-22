import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import LogInLogOutRegisterDatabaseContext from '../../context/logInLogOutRegisterDatabaseContext'
const FormLogin = () => {
  const { emailUser, setUserEmail, password, setPassword, loginInputError, logInHandle } = useContext(LogInLogOutRegisterDatabaseContext)
  return (
    <form className='form'>
      <div className='form__Box'>
        <InputContactForm value={emailUser} handleInput={setUserEmail} type='email' labelText='Email' />
        <InputContactForm value={password} handleInput={setPassword} type='password' labelText='Hasło' />
      </div>
      <div className='form__Row'>
        <a className='linkRegister' href='/rejestracja'>Załóź konto</a>
        <button onClick={e => logInHandle(e)} className='buttonLog'>Zaloguj</button>
      </div>
      {loginInputError && <p className='inputError'>{loginInputError}</p>}

    </form>
  )
}

export default FormLogin