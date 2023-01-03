import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: [],
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    downloadedText: (state, action) => {},
  },
});

export const { downloadedText } = fileSlice.actions;

export default fileSlice.reducer;
