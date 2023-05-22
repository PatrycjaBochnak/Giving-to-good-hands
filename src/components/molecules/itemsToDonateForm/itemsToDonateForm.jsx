import React, { useContext } from 'react'
import DatabaseContext from '../../context/giveThingsBackDatabaseContext'

const ItemsToDonateForm = () => {
  const { formStepsIncrement, nowSteps, formStepsDecrement, toDonateForm, itemsToDonateForm, inputError } = useContext(DatabaseContext)
  const allSteps = 4
  return (
    <div className='items-to-donate-form'>
      {nowSteps !== 5 ? <p className='items-to-donate-form-steps'>Krok {`${nowSteps}/${allSteps}`}</p> : null}
      <form className='to-donate-form'>{toDonateForm}</form>
      {!inputError || <p className='error'>{inputError}</p>}
      <div className='items-to-donate-for-row-button'>
        {nowSteps !== 1 ? <button onClick={() => formStepsDecrement(nowSteps)} className='items-to-donate-form-button-back-button'>Back</button> : null}
        {nowSteps !== 5 ? <button onClick={() => formStepsIncrement(nowSteps)} className='items-to-donate-form-button'>Next</button> : <button onClick={e => itemsToDonateForm(e)} className='items-to-donate-form-button-check'>Accept</button>}
      </div>
    </div>
  )
}

export default ItemsToDonateForm