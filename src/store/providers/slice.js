import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  partners: null,
};

export const partnerSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    allPartnersFetched: (state, action) => {
      // console.log("action?", action);
      state.partners = action.payload;
    },
  },
});

export const { allPartnersFetched } = partnerSlice.actions;

export default partnerSlice.reducer;
