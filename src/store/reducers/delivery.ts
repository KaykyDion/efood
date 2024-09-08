import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DeliveryState = {
  delivery: Delivery;
};

const initialState: DeliveryState = {
  delivery: {
    reciver: "",
    address: {
      description: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
    },
  },
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDelivery: (state, action: PayloadAction<Delivery>) => {
      state.delivery = action.payload;
      console.log(state.delivery);
    },
  },
});

export default deliverySlice.reducer;
export const { setDelivery } = deliverySlice.actions;
