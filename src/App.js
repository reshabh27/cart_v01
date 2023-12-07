import React,{useReducer, useEffect} from "react";
import "./App.css";
import { reducer } from "./components/reducer";
import { addItem, clearCart, decreaseAmount, increaseAmount, removeItem } from "./components/actions";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const defaultState = {
  cart: [],
  total:0,
  isLoading: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    fetch("https://www.course-api.com/react-useReducer-cart-project")
    .then(data => data.json())
    .then(data => {
      addItem(dispatch,data);
    })
    ;
  }, [])
  
  // console.log(state.cart)
  return (
    <div className="App">
      {[...state.cart.entries()].map(([item, quantity]) => {
        // console.log("item",item,"qt",quantity);
        return (
          <div
            key={item}
            style={{
              display: "flex",
              width: "50%",
              margin: "100px auto",
              justifyContent: "space-between",
            }}
          >
            <img src={quantity.img} alt="product" style={{ height: "150px" }} />
            <div>
              <h2>{quantity.title}</h2>
              <p>$ {quantity.price}</p>
              <button onClick={() => removeItem(dispatch,quantity.id)}>Remove</button>
            </div>
            <div>
              <GoArrowUp onClick={() => increaseAmount(dispatch,quantity.id)} />
              <br />
              {quantity.amount}
              <br />
              <GoArrowDown onClick={() => decreaseAmount(dispatch, quantity.id)} />
            </div>
          </div>
        );
      })}
      {/* {[...state.cart.entries()].filter((item) => console.log(item[1]))} */}

      <div style={{display:'flex',justifyContent:'space-around'}}>
        <h2>Total</h2> 
        <p style={{backgroundColor:'blue',color:'white',padding:'10px'}}>$ {state.total}</p>
      </div>
      <br /><br /><br />
      <div style={{textAlign:'center',marginBottom:'100px'}}>
        <button onClick={() => clearCart(dispatch)} >Clear Cart</button>
      </div>
    </div>
  );
}

export default App;
