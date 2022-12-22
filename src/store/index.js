import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/slice";

export default configureStore({
  reducer: {
    userReducer: userSlice,
  },
});
