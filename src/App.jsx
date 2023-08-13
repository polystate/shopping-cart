import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [storeItems, setStoreItems] = useState([]);

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
      <NavBar />
      <main>
        {/* <Home /> */}
        <ProductPage storeItems={storeItems} />
      </main>
      <Footer />
    </>
  )
}

export default App
