import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        {/* <Home /> */}
        <ProductPage />
      </main>
      <Footer />
    </>
  )
}

export default App
