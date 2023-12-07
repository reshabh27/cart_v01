import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section style={{textAlign:'center'}}>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 >is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section>
      {/* cart header */}
      <header style={{ textAlign: "center" }}>
        <h2>your bag</h2>
      </header>

      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>

      {/* cart footer */}
      <footer style={{marginBottom:'100px'}}>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h2> Total </h2>
          <span
            style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
          >
            ${totalCost.toFixed(2)}
          </span>
        </div>
        <button
          style={{
            position: "absolute",
            textAlign: "center",
            marginBottom: "100px",
            left: "46%",
          }}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
