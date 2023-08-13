import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
