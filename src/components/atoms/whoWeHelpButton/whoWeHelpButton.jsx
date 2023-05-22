import React, { useContext } from 'react'
import MainPageDatabaseProvider from '../../context/mainPageDatabaseContext/mainPageDatabaseContext'

const WhoWeHelpButton = ({ titleButton, value }) => {
  const { getValue } = useContext(MainPageDatabaseContext)

  return (
    <button type='button' onClick={(e) => getValue(e, value)} className='who-we-help-button'>{titleButton}</button>
  )
}

export default WhoWeHelpButton