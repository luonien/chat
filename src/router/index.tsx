import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../pages/App'
import Login from '../pages/Login'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
