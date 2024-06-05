/*Esse aquivo precisou ser JSX por motivo da função
displayMessage() precisar renderizar (createRoot) com um componente
react (Gravatar) dentro de uma div */

import Gravatar from "react-gravatar";
import {createRoot} from 'react-dom/client'
import { Client } from "./connectWebSocket";
import { sendMorse } from "./transpileMorse";

const nameStorage = sessionStorage.getItem('userName')


const displayMessage = (message, user, time) => {
  const messageElement = document.createElement('div');
  const parentElement = document.createElement('div');
  const parentText = document.createElement('div');
  const textElement = document.createElement('div');
  const hourElement = document.createElement('span');
  const iconElement = document.createElement('div');
  const gravatarElement = <Gravatar email={user}></Gravatar>

  const root = createRoot(iconElement)
  root.render(gravatarElement)

  // Pegar elementos
  const chatMessage = document.querySelector('.chatMessage');

  textElement.innerHTML = user + ': ' + message

  parentText.appendChild(iconElement)
  parentText.appendChild(textElement)
  hourElement.textContent = time

  chatMessage.appendChild(parentElement)
  messageElement.appendChild(parentText)
  messageElement.appendChild(hourElement)
  parentElement.appendChild(messageElement)

  hourElement.className = 'hour'
  parentText.className = 'parent-text'
  messageElement.className = 'messageElement'
  parentElement.className = 'parentElement'
  textElement.className = 'text-message'

  // Condição para saber se a messagem esta chegando ou enviando
  if (user == sessionStorage.getItem('userName')) {
    parentElement.className += ' ' + 'message-out'
  } else {
    parentElement.className += ' ' + 'message-in'
  }
}

const sendMessage = (inputRef, isMorse) => {
  const message = sendMorse(inputRef.current.value, isMorse)
  const messageData = {
    username: nameStorage,
    message: message,
    type: 'CHAT'
  }

  Client.send("/app/chat_send_message", {}, JSON.stringify(messageData));
  document.querySelector('.textMessage').value = ''


}



export {displayMessage, sendMessage}
