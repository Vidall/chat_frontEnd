// import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes/Routes'

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Routes/>
        </div>
      </BrowserRouter>
  )
}

export default App
