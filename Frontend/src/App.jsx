import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import Login from './pages/Login'
import Account from './pages/Account'
import Cart from './components/Cart'


const App = () => {
  let [num, setNum] = useState(10)
  
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/contact" element={< Contact/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/signup" element={< SignUp/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
