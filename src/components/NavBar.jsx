import { Link } from "react-router-dom";

function NavBar( { userCart } ) {
  // const cartItemsCount = userCart.length;

  const totalQuantity = userCart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
    <nav>
       <div className="branding">
       <span className="material-symbols-outlined">
        shopping_cart
        
        <span className="cart-badge bounce">{totalQuantity}</span>
        
        </span>
        <h1>Cartmon
            Services
        </h1>
       </div>
       <ul>
        <li><Link to="/" className="navLink">Home</Link></li>
        <li><Link to="/products" className="navLink">Products</Link></li>
        <li><Link to="/checkout" className="navLink">Checkout</Link></li>
       </ul>
    </nav>
    </header>
  )
}

export default NavBar