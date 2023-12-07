

function filterMap(originalMap, condition) {
  const filteredEntries = Array.from(originalMap.entries()).filter(
    ([key, value]) => value.id !==condition
  );
  console.log(new Map(filteredEntries));
  return new Map(filteredEntries);
}

function increaseAmounthelper(originalMap,id){
  const updatedCart = new Map([...originalMap.entries()].map(([key, value]) => {
    if (value.id === id) {
      return [key, { ...value, amount: value.amount + 1 }];
    }
    return [key, value];
  }));

  // console.log(updatedCart);
  return updatedCart;
}

function decreaseAmounthelper(originalMap,id)
{
  const updatedcart = new Map([...originalMap.entries()].map(([key,value]) => {
    if(value.id === id )
      return [key ,{...value,amount:((value.amount===0 )? 0 : value.amount-1)}]
    return [key,value];
  }))
  return updatedcart;
}

function findTotal(originalMap){
  //  let total = 0;

  //  for (const [, item] of originalMap.entries()) {
  //    total += item.amount*item.price ;
  //  }

  //  return total;
   return Array.from(originalMap.values()).reduce(
     (total, item) => total + item.amount * item.price,
     0
   );
}


export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: new Map(Object.entries(action.payload)), total:findTotal(state.cart)};
    case "REMOVE_ITEM":
      return { ...state, cart: filterMap(state.cart,action.payload),total:findTotal(state.cart) };
    case "CLEAR_CART":
      return { ...state, cart: new Map() , total:0};
    case "INCREASE_AMOUNT":
      return { ...state , cart : increaseAmounthelper(state.cart,action.payload),total:findTotal(state.cart) };
    case "DECREASE_AMOUNT":
      return { ...state , cart : decreaseAmounthelper(state.cart,action.payload),total:findTotal(state.cart)};
    default:
      return state;
  }
};

