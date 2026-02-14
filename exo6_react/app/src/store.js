import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incrementCount(state) {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
