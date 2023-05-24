/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../../config/supabaseClient'

const LogInLogOutRegisterDatabaseContext = createContext()

export const LogInLogOutRegisterDatabaseProvider = ({ children }) => {
  const [userName, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [emailUser, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [registerInputError, setRegisterInputError] = useState(null)
  const [loginInputError, setLoginInputError] = useState(null)
  const [user, setUser] = useState(null)
  const [handleButton, setHandleButton] = useState('')
  const [session, setSession] = useState(null)

  const navigate = useNavigate()

  const registerHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !repeatPassword || password !== repeatPassword || !emailUser.includes('@')) {
      setRegisterInputError('Please fill in all the fields correctly')
      return
    }
    const { user, session, error } = await supabase.auth.signUp({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setRegisterInputError('Please fill in all the fields correctly')
    }
    if (user) {
      setRegisterInputError(null)
    }

    if (registerInputError === null) {
      navigate('../logowanie')
    }
  }

  const logInHandle = async (e) => {
    e.preventDefault()
    if (!emailUser || !password || !emailUser.includes('@')) {
      setLoginInputError('Please fill in all the fields correctly')
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailUser,
      password: password
    })
    if (error) {
      console.log(error)
      setLoginInputError('Please fill in all the fields correctly')
    }
    if (data) {
      setLoginInputError(null)
      // navigate('../')
      setUser(data.user)
      handleSession()
    }
  }
  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (!error) {
      setSession(data)
    }
  }

  const logOutHandle = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    }
  }

  return (
      <LogInLogOutRegisterDatabaseContext.Provider value={{ setUserName, setUserEmail, setMessage, userName, message, emailUser, password, setPassword, repeatPassword: repeatPassword, setRepeatPassword: setRepeatPassword, registerInputError, registerHandle, loginInputError, logInHandle, logOutHandle, user, handleButton, setHandleButton }}>{children}</LogInLogOutRegisterDatabaseContext.Provider>
  )
}
export default LogInLogOutRegisterDatabaseContext