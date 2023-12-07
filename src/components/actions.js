

export const addItem = (dispatch, item) => {
  dispatch({ type: "ADD_ITEM", payload: item });
};

export const removeItem = (dispatch, item) => {
  dispatch({ type: "REMOVE_ITEM", payload: item });
};

export const clearCart = (dispatch) => {
  dispatch({ type: "CLEAR_CART" });
};

export const increaseAmount = (dispatch, item) => {
  dispatch({ type: "INCREASE_AMOUNT", payload: item });
};

export const decreaseAmount = (dispatch, item) => {
  dispatch({ type: "DECREASE_AMOUNT", payload: item });
};

