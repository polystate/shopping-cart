import CartFullPage from "./CartFullPage";
import CartEmptyPage from "./CartEmptyPage";

function Checkout({ userCart }) {
  const isCartEmpty = userCart.length === 0;

  return (
    (isCartEmpty) ? <CartEmptyPage /> : <CartFullPage userCart={userCart} />
  );
}

export default Checkout;

