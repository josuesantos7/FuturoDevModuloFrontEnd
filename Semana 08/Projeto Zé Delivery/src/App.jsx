import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Login from './pages/Login/Login'
import HeaderLogin from './pages/Login/Header-login'
import CategoriaProdutos from './components/Categoria-produtos'

function App() {

  return (
    <>
    {/* <Header></Header> */}
    {/* <Hero></Hero> */}
    <HeaderLogin></HeaderLogin>
    <Login></Login>
    {/* <CategoriaProdutos></CategoriaProdutos> */}
    </>
    )
  }
export default App
