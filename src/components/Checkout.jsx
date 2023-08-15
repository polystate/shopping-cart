function Checkout({ userCart }) {
  const totalCost = userCart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <section className="productSummary">
      <h3>Product Checkout</h3>
      {console.log(userCart)}
      {userCart.map((item, index) => (
        <>
          <img key={index} className="productImage" src={item.imageURL} />
          <aside>x{item.quantity}</aside>
          <aside>${item.price * item.quantity}</aside>
        </>
      ))}
      <h3 style={{color: 'green'}}>Total Cost: ${totalCost}</h3>
      <h3>Ready for checkout? Pay with one of the cards below...</h3>
    </section>
  )
}

export default Checkout