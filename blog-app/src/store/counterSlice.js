import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByValue: (state, action) => {
      state.count += Number(action.payload);
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementByValue: (state, action) => {
      state.count -= Number(action.payload);
    }
  },
});

export const { increment, incrementByValue, decrement, decrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
