import React, { createContext, useEffect, useState } from 'react'
import supabase from '../../config/supabaseClient'

const MainPageDatabaseContext = createContext()

export const MainPageDatabaseProvider = ({ children }) => {
  const [fetchError, setFetchError] = useState(null)
  const [database, setDatabase] = useState(null)
  const [value, setValue] = useState('localCollections')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [message, setMessage] = useState('')
  const [inputError, setInputError] = useState(null)
  const [arrayPaginate, setArrayPaginate] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [emailUser, setEmailUser] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [name, setName] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(value)
        .select()
      if (error) {
        setFetchError('Could not fetch the database')
        console.log(error)
        setDatabase(null)
      }
      if (data) {
        setDatabase(data)
        setFetchError(null)
      }
    }
    fetchData()
  }, [value])

  const getValue = (e, v) => {
    // e.preventDefault()
    setValue(v)
    switch (v) {
      case 'foundation': {
        setName('Fundacji')
        break
      }
      case 'governmentalOrganizations': {
        setName('Organizacji pozarządowych')
        break
      }
      case 'localCollections': {
        setName('Lokalnych zbiórek')
        break
      }
    }
  }

  useEffect(() => {
    getValue()
  }, [value])

  const sentDataContactUs = async (e) => {
    e.preventDefault()
    if (!userName || !userEmail || !message || !userEmail.includes('@')) {
      setInputError('Please fill in all the fields correctly')
      return
    }
    const { data, error } = await supabase
      .from('users')
      .insert({ userName, userEmail, message })
    if (error) {
      console.error(error)
      setInputError('Please fill in all the fields correctly')
    }
    if (data) {
      console.log(data)
      setInputError(null)
    }
  }

  const itemsPerPages = 3
  const pagesVisited = pageNumber * itemsPerPages
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  useEffect(() => {
    if (database) {
      setArrayPaginate(database.slice(0, 3))
    }
  }, [database])

  return (
      <MainPageDatabaseContext.Provider value={{ database, fetchError, getValue, setUserName, setUserEmail, setMessage, userEmail, userName, message, sentDataContactUs, inputError, arrayPaginate, pagesVisited, itemsPerPages, changePage, emailUser, setEmailUser, password, setPassword, repeatPassword: repeatPassword, setRepeatPassword: setRepeatPassword }}> {children}</MainPageDatabaseContext.Provider >
  )
}
export default MainPageDatabaseContext