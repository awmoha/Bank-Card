import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 1000,
  },
  reducers: {
    incromentByValue: (state, action) => {
      state.count += action.payload;
    },
    decromentByValue: (state, action) => {
      if (state.count - action.payload >= 0) {
        state.count -= action.payload;
      } else alert("No money enough");
    },
  },
});
export const { incromentByValue, decromentByValue } = countSlice.actions;
export default countSlice.reducer;
