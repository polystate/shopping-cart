import { Link } from "react-router-dom"

function CartEmptyPage() {
  return (
    <section className="productPage">
        <div className="emptyContainer">
          <h2>Your cart is currently empty...</h2>
          <img className="emptyCart" src="../public/images/checkout.jpg" />
          <h3 className="goBack">Would you like to go back to <Link to="/">home</Link>?</h3>
        </div>
    </section>
  )
}

export default CartEmptyPage