import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart function with the condition of if item arlready exists or not if yes then it should increate the qty
    // else add the item to the cart
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExists = state.cartItems.find((i) => i._id === item._id);
      if (itemExists) {
        state.cartItems = state.cartItems.map((i) =>
          i._id === item._id ? { ...item, qty: i.qty + 1 } : i
        );
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }
    },
    // A function to removeFromCart.
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i._id !== action.payload._id
      );
    },
    // A function to clear the cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Export the action
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
