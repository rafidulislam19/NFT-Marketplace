import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
import Transaction from './components/Transaction/Transaction'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Explore></Explore>
    <Transaction></Transaction>
    </>
  )
}

export default App
