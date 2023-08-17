import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import NoAPIService from './components/NoAPIService'
import './App.css'


function App() {
  const [storeItems, setStoreItems] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [APIError, setAPIError] = useState(false);

  useEffect(() => {
    async function fetchStoreAPI(){
      try{
        const fetchedItems = await fetch('https://fakestoreapi.com/products');
        const products = await fetchedItems.json();
        setStoreItems([...products]);
        setAPIError(false);
    } catch(error){
        setAPIError(true);
        setUserCart([]);
        console.error('API Service is down');
    }
    }
    fetchStoreAPI();
  }, [])

  return (
    <>
      <NavBar userCart={userCart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          {APIError ? (
            <Route path="/products" element={<NoAPIService />} />
          ) : 
          (
            <Route path="/products" element={<ProductPage storeItems={storeItems} userCart={userCart} setUserCart={setUserCart}/>} />
          )}
          <Route path="/checkout" element={<Checkout userCart={userCart}/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
