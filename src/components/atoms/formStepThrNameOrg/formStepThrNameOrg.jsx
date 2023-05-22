import React, { useContext } from 'react'
import DatabaseContext from '../../context/giveThingsBackDatabaseContext'

const FormStepThrNameOrg = () => {
  const { nameOrg, setNameOrg } = useContext(DatabaseContext)
  return (
    <input type={'text'} value={nameOrg} onChange={(e) => setNameOrg(e.target.value)} className={'form-step-thr-name-org-input-name'} />
  )
}

export default FormStepThrNameOrg