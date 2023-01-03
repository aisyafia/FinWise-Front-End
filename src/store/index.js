import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/slice";
import fileSlice from "./files/slice";

export default configureStore({
  reducer: {
    userReducer: userSlice,
    fileReducer: fileSlice,
  },
});
