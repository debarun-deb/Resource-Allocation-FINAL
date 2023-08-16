import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  User: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.token;
      state.User = action.payload.user;
    },
    setLogout: (state) => {
      state.token = null;
      state.User = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
