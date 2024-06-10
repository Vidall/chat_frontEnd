
# Front-end para chats em tempo real (WebSocket)

![GitHub repo size](https://img.shields.io/github/repo-size/Vidall/chat_frontEnd?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Vidall/chat_frontEnd?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/Vidall/chat_frontEnd?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/Vidall/chat_frontEnd?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/Vidall/chat_frontEnd?style=for-the-badge)

Este projeto foi desenvolvido para visualizar a interação entre serviços WebSocket

## Índice

1. [Visão Geral](#visão-geral)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Scripts Disponíveis](#scripts-disponíveis)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Contribuição](#contribuição)

## Visão Geral

Este Projeto é uma vizualização de interface para sistemas que utilizam os serviços de WebSocket, esse em específico faz a interação de trocas de mensagens simulando uma conversa em tempo real.

As principais funcionalidades são de realizar a criação do escopo da mensagem, enviar a mensagem para o canal definido no back-end e renderizar na tela a resposta da mensagem para todos usuários vizualizarem.

> Tela de Login para acessar o chat com o nickname em http://localhost/login
<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/login.png" alt="Exemplo imagem">
<br>
<br>

> Interface onde acontecerão as trocas de mensagens dos usuários em http://localhost/chat
<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/conversas.png" alt="Exemplo imagem">
<br>
<br>
> ❓ Possibilidade de conversar em código morse ❓
<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/morse.png" alt="Exemplo imagem">

## Instalação

### 🚀 Instalando

Para instalar, siga essa etapa:

```
npm install
```


## uso

### ⚙️ Rodando
Para rodar, siga essa etapa:

```
npm run dev
```

## Scripts Disponíveis

Pastas e utilitários<br>
📁 casos de usos -> src/useCases<br>
📁 Componente do Login -> src/Component/Login<br>
📁 Componentes do Chat -> src/Component/Chat<br>


## Tecnologias Utilizadas
Vite + React <br>

<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/viteReact.png" alt="Exemplo imagem" width="200" height="100">

## Contribuição
Esse projeto foi construído em conjunto com https://github.com/Trafl<br>
O back-end que roda com esse front-end está disponível em https://github.com/Trafl/ChatAppServer_WebSocket<br>


