import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./loginAPI";

const initialState = {
  username: "",
  password: "",
  status: "idle",
};

export const loginAsync = createAsyncThunk(
  "login/fetchLogin",
  async ({ username, password }) => {
    const response = await fetchLogin(username, password);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log("Username: ", action.payload.username);
      console.log("Password: ", action.payload.password);
      state.status = "idle";
    });
  },
});

export const selectUsername = (state) => state.login.username;
export const selectPassword = (state) => state.login.password;

export default loginSlice.reducer;
