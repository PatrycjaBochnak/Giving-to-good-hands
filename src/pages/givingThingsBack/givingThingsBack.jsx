import React from 'react'
import RowForm from '../../components/atoms/rowForm/rowForm'
import FormSteps from '../../components/organisms/formSteps/formSteps'
import HeaderStepsView from '../../components/organisms/headerStepsView/headerStepsView'
import ContactUs from '../../components/organisms/contactUs/contactUs'
import { DatabaseProvider } from '../../components/context/giveThingsBackDatabaseContext'
import { LogInLogOutRegisterDatabaseProvider } from '../../components/context/logInLogOutRegisterDatabaseContext'
import { MainPageDatabaseProvider } from '../../components/context/mainPageDatabaseContext'
const StepsView = () =>
  <div className='steps-page'>
    <LogInLogOutRegisterDatabaseProvider>
      <HeaderStepsView />
    </LogInLogOutRegisterDatabaseProvider>
    <DatabaseProvider>
      <RowForm />
      <FormSteps />
    </DatabaseProvider>
    <MainPageDatabaseProvider>
      <ContactUs />
    </MainPageDatabaseProvider>
  </div>

export default StepsView