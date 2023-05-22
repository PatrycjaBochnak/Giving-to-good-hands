import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import FormStepOne from '../molecules/formSteps/formStepOne/formStepOne'
import FormStepSec from '../molecules/formSteps/formStepSec/formStepSec'
import FormStepThr from '../molecules/formSteps/formStepThr/formStepThr'
import FormStepFour from '../molecules/formSteps/formStepFour/formStepFour'
import FormStepFive from '../molecules/formSteps/formStepsFive/formStepsFive'

const DatabaseContext = createContext()

export const DatabaseProvider = ({ children }) => {
  const [nowSteps, setNowSteps] = useState(1)
  const [dataForm, setDataForm] = useState({})
  const [toDonateForm, setToDonateForm] = useState(null)
  const [inputName, setInputName] = useState('— wybierz —')
  const [inputNameCity, setInputNameCity] = useState('— wybierz —')
  const [arrowRotate, setArrowRotate] = useState(true)
  const [arrowRotateCity, setArrowRotateCity] = useState(true)
  const [handleButton, setHandleButton] = useState('')
  const [backgroundButton, setBackgroundButton] = useState(false)
  const [checked, setChecked] = useState([])
  const [buttonList, setButtonList] = useState([])
  const [nameOrg, setNameOrg] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [clientCity, setClientCity] = useState('')
  const [clientPostNumber, setClientPostNumber] = useState('')
  const [clientPhoneNumber, setClientPhoneNumber] = useState('')
  const [dataDeliver, setDataDeliver] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [noteToTheCourier, setNoteToTheCourier] = useState('')
  const [inputError, setInputError] = useState(null)
  const formStepsIncrement = (step) => {
    if (step !== 5) { setNowSteps(step += 1) }
  }
  const formStepsDecrement = (step) => {
    if (step !== 1) { setNowSteps(step -= 1) }
  }

  useEffect(() => {
    switch (nowSteps) {
      case 1: setToDonateForm(<FormStepOne />); break
      case 2: setToDonateForm(<FormStepSec />); break
      case 3: setToDonateForm(<FormStepThr />); break
      case 4: setToDonateForm(<FormStepFour />); break
      case 5: setToDonateForm(<FormStepFive />); break
    }
  }, [nowSteps])
  const arrowValueList = [1, 2, 3, 4, 5]
  const cityValueList = ['Poznan', 'Warsaw', 'Cracow', 'Wroclaw', 'Katowice']
  const listFormStepHandle = (e) => {
    e.preventDefault()
    setArrowRotate(!arrowRotate)
  }

  const hiddenListFormStepHandle = (e) => {
    e.preventDefault()
    setArrowRotate(false)
    setHandleButton(e.target.value)
    setInputName(handleButton)
  }

  const handleCityButton = () => {
    setArrowRotateCity(!arrowRotateCity)
  }

  const handleCity = (e, el) => {
    e.preventDefault()
    setInputNameCity(el)
    setArrowRotateCity(!arrowRotateCity)
  }

  const whoDoYouWantToHelpArray = ['kids', 'single mothers', 'homeless', 'disabled', 'elder people']
  const handleWhoDoYouWantToHelpButtonList = (e) => {
    e.preventDefault()
    setBackgroundButton(true)
    let updatedList = [...buttonList]
    if (e.target.value) {
      updatedList = [...buttonList, e.target.value]
    } else {
      updatedList.splice(buttonList.indexOf(e.target.value), 1)
    }
    setButtonList(updatedList)
  }

  const handleCheck = (e) => {
    let updatedList = [...checked]
    if (e.target.checked) {
      updatedList = [...checked, e.target.value]
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1)
    }
    setChecked(updatedList)
  }

  useEffect(() => {
    if (nowSteps === 5) {
      setDataForm({
        selectWhatYouWantToGiveBack: checked,
        enterTheNumberOfBags: handleButton,
        location: inputNameCity,
        whoDoYouWantToHelp: buttonList,
        nameOrg: nameOrg,
        clientAddress: clientAddress,
        clientCity: clientCity,
        clientPostNumber: clientPostNumber,
        clientPhoneNumber: clientPhoneNumber,
        dataDeliver: dataDeliver,
        pickupTime: pickupTime,
        noteToTheCourier: noteToTheCourier
      })
    }
  }, [nowSteps])

  const itemsToDonateForm = async () => {
    if (checked.length > 1 || handleButton.slice(1, -1).length > 1 || !inputNameCity || inputNameCity === '— choose —' || !buttonList || buttonList.length > 1 || nameOrg.slice(1, -1).length > 1 || !nameOrg || !clientAddress || clientAddress.slice(1, -1).length > 1 || !clientCity || clientCity.slice(1, -1).length > 1 || !clientPostNumber || clientPostNumber.slice(1, -1).length > 1 || !clientPhoneNumber || clientPhoneNumber.slice(1, -1).length > 1 || !dataDeliver || dataDeliver.slice(1, -1) || !pickupTime || !noteToTheCourier) {
      setInputError('Please fill in all the fields correctly')
      return
    }
    const { data, error } = await supabase
      .from('itemsToDonateForm')
      .insert({ dataForm })
    if (error) {
      console.error(error)
      setInputError('Please fill in all the fields correctly')
    }
    if (data) {
      console.log(data)
      setInputError(null)
    }
  }

  return (
    <DatabaseContext.Provider value={{ formStepsIncrement, nowSteps, formStepsDecrement, toDonateForm, inputName, listFormStepHandle, arrowRotate: arrowRotate, arrowValueList, hiddenListFormStepHandle, handleButton, setHandleButton, cityValueList, handleCityButton, arrowRotateCity: arrowRotateCity, handleCity, inputNameCity, whoDoYouWantToHelpArray, handleWhoDoYouWantToHelpButtonList, backgroundButton, handleCheck, nameOrg, setNameOrg, clientAddress, setClientAddress, clientCity, setClientCity, clientPostNumber, setClientPostNumber, clientPhoneNumber, setClientPhoneNumber, dataDeliver, setDataDeliver, pickupTime, setPickupTime, noteToTheCourier, setNoteToTheCourier, dataForm, itemsToDonateForm }}>{children}</DatabaseContext.Provider>
  )
}
export default DatabaseContext