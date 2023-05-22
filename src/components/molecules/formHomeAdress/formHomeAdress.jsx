import React, { useContext } from 'react'
import DatabaseContext from '../../context/giveThingsBackDatabaseContext'

const FormHomeAdress = () => {
  const { clientAddress, setClientAddress, clientCity, setClientCity, clientPostNumber, setClientPostNumber, clientPhoneNumber, setClientPhoneNumber } = useContext(DatabaseContext)
  return (
        <div className='formHomeAdress'>
            <p className='title'>Adres odbioru:</p>
            <div className='formHomeAdressRow'>
              <label className='labelAdress'>Ulica</label><input type={'text'} value={clientAddress} onChange={e => setClientAddress(e.target.value)} className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Miasto</label><input type={'text'} value={clientCity} onChange={e => setClientCity(e.target.value)} className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Kod pocztowy</label><input type={'text'} value={clientPostNumber} onChange={e => setClientPostNumber(e.target.value)} className='inputAdress' />
            </div>
            <div className='formHomeAdressRow'>
                <label className='labelAdress'>Numer telefonu</label><input type={'text'} value={clientPhoneNumber} onChange={e => setClientPhoneNumber(e.target.value)} className='inputAdress' />
            </div>
        </div>
  )
}

export default FormHomeAdress