import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file: null,
  text: [],
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    downloadedFile: (state, action) => {
      state.file = action.payload;
    },
    foundWords: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { downloadedFile, foundWords } = fileSlice.actions;

export default fileSlice.reducer;
