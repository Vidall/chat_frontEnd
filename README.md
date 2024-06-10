
# Front-end para chats em tempo real (WebSocket)

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

Este projeto foi desenvolvido para visualizar a interação entre serviços WebSocket

## Índice

1. [Visão Geral](#visão-geral)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Scripts Disponíveis](#scripts-disponíveis)
5. [Estrutura do Projeto](#estrutura-do-projeto)
6. [Tecnologias Utilizadas](#tecnologias-utilizadas)
7. [Contribuição](#contribuição)

## Visão Geral

Este Projeto é uma vizualização de interface para sistemas que utilizam os serviços de WebSocket, esse em específico faz a interação de trocas de mansagens simulando uma conversa em tempo real.

As principais funcionalidades são de realizar a criação do escopo da mensagem, enviar a mensagem para o canal definido no back-end e redenrizar na tela a resposta da mensagem para todos usuários vizualizarem.

> Tela de Login para acessar o site com o nickname em http://localhost/login
<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/login.png" alt="Exemplo imagem">

> Interface onde acontecerão as trocas de mensagens dos usuários em http://localhost/chat
<img src="https://github.com/Vidall/chat_frontEnd/blob/main/public/images/conversas.png" alt="Exemplo imagem">

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


## Estrutura principal do projeto
$ tree
.
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           ├── App.java
│   │   │           └── Utils.java
│   │   └── resources
│   │       └── application.properties
│   └── test
│       ├── java
│       │   └── com
│       │       └── example
│       │           └── AppTest.java
│       └── resources
│           └── test.properties
├── build
├── .gitignore
└── README.md




