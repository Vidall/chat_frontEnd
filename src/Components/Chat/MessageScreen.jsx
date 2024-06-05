import React from 'react'

import InputMessage from './InputMessage'

import './MessageScreen.css'

const MessageScreen = ({morse, handleClickMorse}) => {

  const hadleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='messageScreen' onSubmit={hadleSubmit}>
      <div className='chatMessage'>
        <InputMessage morse={morse} handleClickMorse={handleClickMorse}/>
      </div>
    </div>
  )
}

export default MessageScreen

