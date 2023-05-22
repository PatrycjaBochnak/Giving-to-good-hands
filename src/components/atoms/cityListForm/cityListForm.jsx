import React, { useContext } from 'react'
import DatabaseContext from '../../context/giveThingsBackDatabaseContext'

const CityListForm = () => {
  const { cityValueList, handleCity } = useContext(DatabaseContext)
  return (
    <ul className='city-list'>
      {
        cityValueList.map((el) =>
          <li className='element-list' key={el}>
            <button onClick={(e) => handleCity(e, el)} className='button'>{el}</button>
          </li>
        )
      }

    </ul>
  )
}

export default CityListForm