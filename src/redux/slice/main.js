import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getUsers = createAsyncThunk("main/getUsers", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  return json;
});

const mainSlice = createSlice({
  name: "main",
  initialState: {
    name: "",
    users : [
        // {id: 0, name:"Moha" }
    ],
    status: null
  },
  extraReducers: {
  [getUsers.fulfilled]:(state, action) => {
      let updateUsers = state.users.concat(action.payload);
      state.users = updateUsers
      state.status = null
  },
  [getUsers.pending]: (state) => {
      state.status = "Loading"
  },
  [getUsers.rejected]:(state) => {
      state.status = "Failed to fetch users"
  }
  },
});
export default mainSlice.reducer;
