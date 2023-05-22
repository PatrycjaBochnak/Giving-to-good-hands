import React, { useContext } from 'react'
import InputContactForm from '../../atoms/inputContactForm/inputContactForm'
import LogInLogOutRegisterDatabaseContext from '../../context/logInLogOutRegisterDatabaseContext'

const FormRegister = () => {
  const { emailUser, setUserEmail, password, setPassword, repeatPassword, setRepeatPassword, registerInputError, registerHandle } = useContext(LogInLogOutRegisterDatabaseContext)
  return (
        <form className='register-form'>
          <div className='register-form-box'>
                <InputContactForm handleInput={setUserEmail} value={emailUser} type='email' labelText='Email' />
                <InputContactForm handleInput={setPassword} value={password} type='password' labelText='Password' />
                <InputContactForm handleInput={setRepeatPassword} value={repeatPassword} type='password' labelText='Repeat password' />
            </div>
          <div className='registerform-row'>
              <a className='register-form-link' href='../logowanie'>Zaloguj się</a>
              <button onClick={e => registerHandle(e)} className='registerForm__button'>Załóź konto</button>
            </div>
            {registerInputError && <p className='inputError'>{registerInputError}</p>}

        </form>

  )
}

export default FormRegister