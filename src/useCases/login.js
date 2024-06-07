import { port } from "../config/port"


export const verifyLogin = () => {
  const userName = sessionStorage.getItem('userName')
  if (!userName) window.location.href = `http://localhost:${port}/login`
}

export const login = (userName) => {
    window.location.assign(`http://localhost:${port}/chat`)
    sessionStorage.setItem('userName', userName)
}

export const displayLoginAlert = (username) => {
    const chatMessage = document.querySelector('.chatMessage');

    const alertElement = document.createElement('div')
    const alertText = document.createElement('span')

    alertText.innerHTML = `${username} entrou`

    alertElement.appendChild(alertText)
    chatMessage.appendChild(alertElement)

    alertElement.className = 'alertLogin'

    return username

}

export const displayLogoutAlert = (username) => {
    const chatMessage = document.querySelector('.chatMessage');

    const alertElement = document.createElement('div')
    const alertText = document.createElement('span')

    alertText.innerHTML = `${username} saiu`

    alertElement.appendChild(alertText)
    chatMessage.appendChild(alertElement)

    alertElement.className = 'alertLogin'

    return username

}
