import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponents from './components/NavbarComponents'
import { Route, Routes } from 'react-router-dom'
import LoginComponents from './components/LoginComponents'
import SignupComponents from './components/SignupComponents'
import AddmovieComponents from './components/AddmovieComponents'
import DashboardComponents from './components/DashboardComponents'
import LogoutComponents from './components/LogoutComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavbarComponents/>
        <Routes>
          <Route path='/login' element={<LoginComponents/>}></Route>
          <Route path='/signup' element={<SignupComponents/>}></Route>
          <Route path='/addmovie' element={<AddmovieComponents/>}></Route>
          <Route path='/dashboard' element={<DashboardComponents/>}></Route>
          <Route path='/logout' element={<LogoutComponents/>}></Route>
       </Routes>
      
    </>
  )
}

export default App
