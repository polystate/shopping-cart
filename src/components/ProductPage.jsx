import ProductCard from "./ProductCard"

function ProductPage({ storeItems }) {
  return (
    <section className="productPage">
        {console.log(storeItems)}
        {storeItems.map((product, index) => (
            <ProductCard key={index} title={product.title} imageURL={product.image} description={product.description} rating={product.rating} price={product.price} />
        ))}
    </section>
  )
}

export default ProductPage