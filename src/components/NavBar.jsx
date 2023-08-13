function NavBar() {
  return (
    <header>
    <nav>
       <div className="branding">
       <span className="material-symbols-outlined">
        shopping_cart
        </span>
        <h1>Cartmon</h1>
       </div>
       <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Checkout</li>
       </ul>
    </nav>
    </header>
  )
}

export default NavBar