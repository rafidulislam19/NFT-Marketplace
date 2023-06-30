import './App.css'
import Navbar from './components/Navbar/Navbar'
import Explore from './components/Explore/Explore'
import Transaction from './components/Transaction/Transaction'
import TopCollections from './components/TopCollections/TopCollections'
import FeaturedCollections from './components/FeaturedCollections/FeaturedCollections'
import CreateAndSell from './components/CreateAndSell/CreateAndSell'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Explore></Explore>
    <Transaction></Transaction>
    <TopCollections></TopCollections>
    <FeaturedCollections></FeaturedCollections>
    <CreateAndSell></CreateAndSell>
    <Footer></Footer>
    </>
  )
}

export default App
