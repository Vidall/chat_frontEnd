import React, { useRef }from "react";
import './InputMessage.css';
import { MdContactSupport, MdSend  } from 'react-icons/md'
import {sendMessage} from "../../useCases/functionality-chat";

const InputMessage = ({morse, handleClickMorse}) => {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputRef !== ""){
      sendMessage(inputRef, morse)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <div className="inputMessage">
        <input ref={inputRef} className='textMessage' type="text" placeholder="Escreva uma mensagem" />
        <button >
          <MdSend className="icon-send"/>
        </button>
      </div>
    </form>
  )
}

export default InputMessage
