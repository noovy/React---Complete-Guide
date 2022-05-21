import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const isToggle = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  console.log(isToggle);
  console.log(cart);

  useEffect(() => {
    fetch(
      "https://xpert-academy-1579184148150-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

 
  return (
    <Layout>
      {isToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
