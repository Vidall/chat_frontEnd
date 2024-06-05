import './Chat.css'
import { useEffect, useState } from 'react'
import MessageScreen from './MessageScreen'
import Channels from './Channels'
import Header from './Header'
import {connect} from '../../useCases/connectWebSocket'
import {transpileMorse, transpileText} from '../../useCases/transpileMorse';
import { verifyLogin } from '../../useCases/login'

const Chat = () => {
  const [state, setState] = useState(window.onresize <= 550 ? false : true)
  const [ channel, setChannel] = useState(1)
  const [mobileScreen, setMobileScreen] = useState(false)
  const [morse, setMorse] = useState(false)


  window.onresize = function () {
    const screenWidth = window.innerWidth
    if (screenWidth <= 550) {
      setState(false)
      setMobileScreen(true)
    } else {
      setState(true)
      setMobileScreen(false)
    }
  }

  const isVisibleMenu = () => {
    if (!state) {
      setState(true)
    } else {
      setState(false)
    }
  }

  const screenGRID = () => {
    if ( mobileScreen && state) {
      return '"header header" "channels channels"'
    } else if (mobileScreen && !state || !mobileScreen && !state) {
      return '"header header" "messageScreen messageScreen"'
    }
   }

   const handleClickMorse = async () => {
    if (!morse) {
      setMorse(true)
      transpileMorse()
    }else {
      setMorse(false)
      transpileText()
    }
  }

  useEffect(() => {
    verifyLogin()
    connect()
  }, [])


  return (
    <div className='chat' style={{gridTemplateAreas: screenGRID()}}>
      <Channels state={state}
      isMenuVisible={isVisibleMenu}
      channel={channel}
      mobileScreen={mobileScreen}
      />

      <Header state={state}
      isMenuVisible={isVisibleMenu}
      channel={channel}
      morse={morse}
      handleClickMorse={handleClickMorse}/>

      <MessageScreen
      morse={morse}
      handleClickMorse={setMorse}/>
    </div>
  )
}

export default Chat
