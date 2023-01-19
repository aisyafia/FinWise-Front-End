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
    onePartnerFetched: (state, action) => {
      //   console.log("action?", action);
      state.partners = action.payload;
    },
    addNewPartner: (state, action) => {
      const newPartner = action.payload;
      state.partners = [...state.partners, newPartner];
    },
  },
});

export const { allPartnersFetched, onePartnerFetched, addNewPartner } =
  partnerSlice.actions;

export default partnerSlice.reducer;
