import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const isExisting = state.orders.some((item) => item._id === product._id);
      if (!isExisting) {
        state.orders.push(product);
      }
    },
    deleteProduct: (state, action) => {
      state.orders = state.orders.filter((el) => el._id !== action.payload);
    },
    deleteAll: (state, action) => {
      state.orders = [];
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const amount = +quantity;
      return {
        ...state,
        orders: state.orders.map((item) =>
          item._id === id ? { ...item, amount } : item
        ),
      };
    },
  },
});

export const { addProduct, deleteProduct, deleteAll, updateItemQuantity } =
  orderSlice.actions;
export default orderSlice.reducer;
