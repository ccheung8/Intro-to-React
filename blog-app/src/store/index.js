import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postReducer";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
