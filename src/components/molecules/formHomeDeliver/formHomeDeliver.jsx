import React, { useContext } from 'react'
import DatabaseContext from '../../context/giveThingsBackDatabaseContext'

const FormHomeDeliver = () => {
  const { dataDeliver, setDataDeliver, pickupTime, setPickupTime, noteToTheCourier, setNoteToTheCourier } = useContext(DatabaseContext)
  return (
    <div className='formHomeAddress'>
      <p className='title'>Termin odbioru:</p>
      <div className='formHomeAddressRow'>
        <label className='labelAddress'>Data</label><input type={'date'} value={dataDeliver} onChange={e => setDataDeliver(e.target.value)} className='inputAddress' />
      </div>
      <div className='formHomeAddressRow'>
        <label className='labelAddress'>Godzina</label><input type={'time'} value={pickupTime} onChange={e => setPickupTime(e.target.value)} className='inputAddress' />
      </div>
      <div className='formHomeAddressRow'>
        <label className='labelAddress'>Uwagi dla kuriera</label> <textarea value={noteToTheCourier} onChange={e => setNoteToTheCourier(e.target.value)} className='inputAddress textArea' />
      </div>
    </div>
  )
}

export default FormHomeDeliver