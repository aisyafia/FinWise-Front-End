import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/slice";
import fileSlice from "./files/slice";
import partnerSlice from "./providers/slice";

export default configureStore({
  reducer: {
    userReducer: userSlice,
    fileReducer: fileSlice,
    partnerReducer: partnerSlice,
  },
});
