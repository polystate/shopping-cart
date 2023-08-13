function ProductCard({title, price, imageURL, description, rating}) {
  return (
    <div className="productCard">
        <h2 className="productTitle">{title || "Default Product"}</h2>
        <img className="productImage" src={imageURL} alt="product description" />
        <p className="productPrice"><strong>${price}</strong></p>
        <p>{description}</p>
        <p className="rating">Rated: <strong>{rating.rate}</strong></p>
        <div className="btnContainer">
        
        <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard