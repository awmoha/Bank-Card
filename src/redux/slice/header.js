import { createSlice } from "@reduxjs/toolkit";
const headerSlice = createSlice({
  name: "header",
  initialState: {
    name: "",
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    }
  }
});
export const { changeName } = headerSlice.actions;
export default headerSlice.reducer;
