import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartCountState {
  value: number;
}

const initialState: CartCountState = {
  value: JSON.parse(localStorage.getItem("cart") || "[]").reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0
  ),
};

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { setTotalCount, incrementByAmount, decrementByAmount } =
  cartCountSlice.actions;
export default cartCountSlice.reducer;
