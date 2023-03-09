import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

  let navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <button className='back-btn' onClick={goBack}>
      <ion-icon name="arrow-back" />
      Back
    </button>
  )
}

export default BackButton