function CartFullPage( { userCart }) {
    const totalCost = userCart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0).toFixed(2);

  return (
    <section className="productPage">
      <h2>Product Checkout</h2>
      {userCart.map((item) => (
        <div key={self.crypto.randomUUID()} className="productCheckout">
          <h5>{item.title}</h5>
          <img className="productImage" src={item.imageURL} alt={item.title} />
          <aside><strong>x{item.quantity}</strong></aside>
          <aside><strong>Cost: ${item.quantity * item.price}</strong></aside>
        </div>
      ))}
      <div className="totalPayment">
      <h2>Total Cost: ${totalCost}</h2>
      </div>
    </section>
  )
}

export default CartFullPage