import ProductCard from "./ProductCard"

function ProductPage({ storeItems, userCart, setUserCart }) {
  return (
    <section className="productPage">
        {storeItems.map((product, index) => (
            <ProductCard key={index} title={product.title} imageURL={product.image} description={product.description} rating={product.rating} price={product.price} userCart={userCart} setUserCart={setUserCart} />
        ))}
    </section>
  )
}

export default ProductPage