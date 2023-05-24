import React from 'react'
import RowForm from '../../components/atoms/rowForm/rowForm'
import FormSteps from '../../components/organisms/formSteps/formSteps'
import HeaderSteps from '../../components/organisms/headerSteps/headerSteps'
import Contact from '../../components/organisms/contact/contact'
import { DatabaseProvider } from '../../components/context/giveThingsBackDatabaseContext/giveThingsBackDatabaseContext'
import { LogInLogOutRegisterDatabaseProvider } from '../../components/context/logInLogOutRegisterDatabaseContext/logInLogOutRegisterDatabaseContext'
import { MainPageDatabaseProvider } from '../../components/context/mainPageDatabaseContext/mainPageDatabaseContext'

const StepsView = () =>
  <div className='steps-page'>
    <LogInLogOutRegisterDatabaseProvider>
      <HeaderSteps />
    </LogInLogOutRegisterDatabaseProvider>
    <DatabaseProvider>
      <RowForm />
      <FormSteps />
    </DatabaseProvider>
    <MainPageDatabaseProvider>
      <Contact />
    </MainPageDatabaseProvider>
  </div>

export default StepsView