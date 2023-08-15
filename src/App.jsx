import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import './App.css'


function App() {
  const [storeItems, setStoreItems] = useState([]);
  const [userCart, setUserCart] = useState([]);

  useEffect(() => {
    async function fetchStoreAPI(){
      const fetchedItems = await fetch('https://fakestoreapi.com/products');
      const products = await fetchedItems.json();
      setStoreItems([...products]);
    }
    fetchStoreAPI();
  }, [])

  return (
    <>
      <NavBar userCart={userCart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<ProductPage storeItems={storeItems} userCart={userCart} setUserCart={setUserCart}/>}/>
          <Route path="/checkout" element={<Checkout userCart={userCart}/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
