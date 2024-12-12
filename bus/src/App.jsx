import { useState } from 'react'
import './App.css'
import ParteOne from './components/ParteOne'
import PartTwo from './components/PartTwo'
import PartThree from './components/PartThree'
import Carr from './components/Carr'
import Discover from './components/Discover'
import Partnes from './components/Partnes/Index'
import Travel from './components/Travel'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mission from './components/Mission'
import Maps from './components/Maps'
import Form from './components/Form'
import Star from './components/Star'

function App() {

  return (
    <>
    <main className="container-g">
      <Navbar/>
      <ParteOne/>
      <PartTwo/>
      <PartThree/>
      <Discover/>
      <Carr/>
      <Mission/>
      <Partnes/>
      <Travel/>
      <Star/>
      <Maps/>
      <Form/>
      <Footer/>
    </main>
      
    </>
  )
}

export default App
