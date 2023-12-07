import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article
      style={{
        display: "flex",
        width: "50%",
        margin: "100px auto",
        justifyContent: "space-between",
      }}
    >
      <img src={img} alt={title} style={{ height: "150px" }} />
      <div>
        <h5>{title}</h5>
        <span >${price}</span>
        {/* remove button */}
        <button  onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button  onClick={() => increase(id)}>
          <FaChevronUp  />
        </button>
        {/* amount */}
        <span >{amount}</span>
        {/* decrease amount */}
        <button onClick={() => decrease(id)}>
          <FaChevronDown  />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
