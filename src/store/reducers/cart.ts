import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Product[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemToRemove, 1);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { open, close, add, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
