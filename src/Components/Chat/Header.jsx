import React, { useState } from 'react'

import './Header.css';

import Gravatar from 'react-gravatar';
import { CiLock, CiUnlock } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";



const Header = ({state, isMenuVisible, channel, morse, handleClickMorse}) => {
  const handleVisible = () => {
    isMenuVisible()
  }
  const iconCode = () => {
    if (morse) {
      return <CiLock onClick={handleClickMorse}/>
    }else {
      return <CiUnlock onClick={handleClickMorse}/>
    }
  }

  return (
    <div className='header'>
        <FaArrowLeft onClick={handleVisible} style={{display: state ? 'none' : ''}}/>
        <Gravatar email={String(channel)} className='icon-channel'/>
        <div className='name-channel'>Canal {channel}</div>
        <div className='more-icon'>
           {iconCode()}
        </div>
    </div>
  )
}

export default Header

