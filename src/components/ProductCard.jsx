import React, { useState } from 'react'

function ProductCard({title, price, imageURL, description, rating, userCart, setUserCart}) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = (e) => {
    e.preventDefault();
    const existingIndex = userCart.findIndex(item => item.title === title);

    if(existingIndex !== -1){
      const updatedCart = [...userCart];
      updatedCart[existingIndex].quantity += quantity;
      setUserCart(updatedCart);
    } else {
      setUserCart([...userCart, {title: title, price: price, imageURL: imageURL, quantity: quantity}])
    }
  }

  const removeFromCart = (e) => {
    e.preventDefault();
    const updatedCart = userCart.filter((item) => item.title !== title);
    setUserCart(updatedCart);
  }

  const handleQuantityChange = (e) => {
    const operand = e.target.textContent;
    (operand === "+") ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
    if(quantity < 1) setQuantity(1);
  }

  return (
    <div className="productCard">
        <h2 className="productTitle">{title || "Default Product"}</h2>
        <img className="productImage" src={imageURL} alt="product description" />
        <p className="productPrice"><strong>${price}</strong></p>
        <p className="productDescription">{description}</p>
        <p className="rating">Rated: <strong>{rating.rate}</strong></p>
        <div className="quantitySelector">
          <label htmlFor="quantity">Quantity:</label>
          <div className="numberPad">
          <span className="chooseQuantity" onClick={handleQuantityChange}>-</span>
          <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" />
          <span className="chooseQuantity" onClick={handleQuantityChange}>+</span>
          </div>
        </div>
        <div className="btnContainer">
        <button className="productButton" onClick={addToCart}>Add to Cart</button>
        <button className="productButton" onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default ProductCard;