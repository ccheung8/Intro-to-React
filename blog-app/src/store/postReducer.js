import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [{ title: "my post"}],
  reducers: {
    createPost: (state, data) => {
      console.log("create post", data);
      return [
        ...state,
        { id: Math.floor(Math.random() * 10000000), ...data.payload },
      ];
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
