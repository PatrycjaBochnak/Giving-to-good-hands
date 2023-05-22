import React, { useContext } from 'react'
import DatabaseContext from '../../../context/giveThingsBackDatabaseContext'

const FormStepOne = () => {
  const { handleCheck } = useContext(DatabaseContext)
  return (
    <div className='form-step-one'>
      <h3 className='formStepTitle'>Choose what do you want give back:</h3>
      <div className='inFormBox'>
        <label htmlFor='reusableClothes' className='inputName'>
          <input className='checkInput' id='reusableClothes' type={'checkbox'} value={'które nadają się do ponownego użycia'} onChange={(e) => { handleCheck(e) }} /><span className='checkBox'></span>
          ubrania, które nadają się do ponownego użycia
        </label>
        <label htmlFor='clothesToThrowAway' className='inputName'>
          <input className='checkInput' id='clothesToThrowAway' type={'checkbox'} value={'do wyrzucenia'} onChange={(e) => { handleCheck(e) }} /> <span className='checkBox'></span>
          ubrania, do wyrzucenia
        </label>
        <label htmlFor='toys' className='inputName'>
          <input className='checkInput' id='toys' type={'checkbox'} value={'zabawki'} onChange={(e) => { handleCheck(e) }} /> <span className='checkBox'></span>
          zabawki
        </label>
        <label htmlFor='books' className='inputName'>
          <input className='checkInput' id='books' type={'checkbox'} value={'książki'} onChange={(e) => { handleCheck(e) }} /><span className='checkBox'></span>
          książki
        </label>
        <label htmlFor='other' className='inputName'>
          <input className='checkInput' id='other' type={'checkbox'} value={'Inne'} onChange={(e) => { handleCheck(e) }} /> <span className='checkBox'></span>
          Inne
        </label>
      </div>
    </div>
  )
}

export default FormStepOne