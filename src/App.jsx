import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
import Transaction from './components/Transaction/Transaction'
import TopCollections from './components/TopCollections/TopCollections'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Explore></Explore>
    <Transaction></Transaction>
    <TopCollections></TopCollections>
    </>
  )
}

export default App
