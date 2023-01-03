import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: [] | null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // console.log("action?", action);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    allPartnersFetched: (state, action) => {
      // console.log("action?", action);
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, logOut, allPartnersFetched } = userSlice.actions;

export default userSlice.reducer;
