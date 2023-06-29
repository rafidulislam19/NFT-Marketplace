import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
import Transaction from './components/Transaction/Transaction'
import TopCollections from './components/TopCollections/TopCollections'
import FeaturedCollections from './components/FeaturedCollections/FeaturedCollections'
import CreateAndSell from './components/CreateAndSell/CreateAndSell'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Explore></Explore>
    <Transaction></Transaction>
    <TopCollections></TopCollections>
    <FeaturedCollections></FeaturedCollections>
    <CreateAndSell></CreateAndSell>
    </>
  )
}

export default App
