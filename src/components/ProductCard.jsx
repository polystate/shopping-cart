function ProductCard() {
  return (
    <div className="productCard">
        
        <h3>Tailored Jeans</h3>
        <img className="productImage" src="/checkout.jpg" alt="product description" />
        <p className="productPrice">$19.99</p>
        <p>Some text about jeans...</p>
        <div className="btnContainer">
        <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard