import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  User: null,
  bookedDates: [],
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
    setBookedDates: (state, action) => {
      state.bookedDates = action.payload;
    },
  },
});

export const { setLogin, setLogout, setBookedDates } = authSlice.actions;
export default authSlice.reducer;
