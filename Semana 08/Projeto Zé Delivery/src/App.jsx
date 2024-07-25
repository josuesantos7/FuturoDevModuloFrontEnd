import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Login from './pages/Login/Login'
import HeaderLogin from './pages/Login/Header-login'

// import Footer from './components/Footer'
// import "./components/Footer.css"
// import BannerContato from './components/Banner-contato'
// import './App.css'

function App() {

  return (
    <>
      {/* <Header></Header> */}
      {/* <Hero></Hero> */}
      <HeaderLogin></HeaderLogin>
      <Login></Login>
    </>
  )
}

export default App
