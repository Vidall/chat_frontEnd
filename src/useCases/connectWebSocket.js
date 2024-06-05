// Conexao com a API WebSocket do backEnd
import { displayMessage } from "./functionality-chat";

const socket = new WebSocket('ws://localhost:8080/conect_websocket');
const Client = Stomp.over(socket);
const name = sessionStorage.getItem('userName')
import { displayLoginAlert, displayLogoutAlert } from "./login";


const joinServer = () => {
    return Client.send("/app/chat_add_user", {}, JSON.stringify({username: name, type: 'JOIN'}))
}

const connect = () => {
Client.connect({}, function() {
    joinServer()

    Client.subscribe('/chat', function(message) {
    const chatMessage = JSON.parse(message.body);
    if (chatMessage.type == 'JOIN'){
        displayLoginAlert(chatMessage.username)
    }else if (chatMessage.type == 'LEAVER') {
        displayLogoutAlert(chatMessage.username)
    }else{
        displayMessage(chatMessage.message, chatMessage.username, chatMessage.time);
    }
    })
})
}

export {Client, connect}
