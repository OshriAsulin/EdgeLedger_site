import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './components/Navabar'
import Icons from './components/Icons'
import Solutions from './components/Solutions'
import Cases from './components/Cases'
import Blog from './components/Blog'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navabar />
      <Icons/>
      <Solutions/>
      <Cases/>
      <Blog/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
