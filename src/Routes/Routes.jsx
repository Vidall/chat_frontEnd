// import React from 'react'

import {Routes, Route } from 'react-router-dom'

import Login from '../Components/Login/Login'
import Chat from '../Components/Chat/Chat'

const Rotas = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Chat />}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Rotas
