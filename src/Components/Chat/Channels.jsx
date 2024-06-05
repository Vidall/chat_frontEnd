import React from 'react'

import './Channels.css'

import Gravatar from 'react-gravatar'
import { CiMenuFries, CiSettings, CiLogout } from "react-icons/ci";
import { logout } from '../../useCases/logout';

const Channels = ({state, isMenuVisible, channel, mobileScreen}) => {
  const name = sessionStorage.getItem('userName')

  const handleVisible = () => {
    isMenuVisible()
  }


  return (
    <div className='channels' style={{display: state ? '' : 'none'}}>
      <div className="menu">
        <div className='name'>
          <Gravatar email={name} size={35}/>
          {name}
        </div>
        <CiMenuFries className='menu-icon' onClick={handleVisible}/>
      </div>
      <div className="channelList">

        <nav>
          <ul>
            <li>
              <Gravatar email={String(channel)}/>
              canal {channel}
            </li>
          </ul>
        </nav>
      </div>

      <div className="tools">
        <div className='tollsChildren'>
          <CiSettings className='tools-icon'/>
          <CiLogout className='tools-icon'onClick={logout}/>
        </div>
      </div>
    </div>
  )
}

export default Channels

