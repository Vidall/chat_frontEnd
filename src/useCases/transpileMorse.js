// const lenMessage = document.getElementsByClassName('text-message').length
import { textToMorse, morseTotext } from './morsecode'

const elementText = document.getElementsByClassName('text-message')

const transpileMorse = () => {
    for (const element of elementText) {
      const really = element.textContent
      const transpile = textToMorse(really)
      element.textContent = transpile
    }
}

const transpileText = () => {
    for (const element of elementText) {
      const really = element.textContent
      const transpile = morseTotext(really)
      element.textContent = transpile
    }
}

const sendMorse = (message, isMorse) => {
    if(isMorse) {
      return textToMorse(message)
    }else {
      return message
    }
}

export {transpileMorse, transpileText, sendMorse}
