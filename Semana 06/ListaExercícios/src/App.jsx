import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import "./components/Footer.css"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>

      <Footer></Footer>
      
    </>
  )
}

export default App
