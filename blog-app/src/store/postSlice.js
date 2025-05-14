import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      { id: 1, title: "initial", content: "initial", category: "technology" },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      // DON'T HAVE TO MAKE COPY OF STATE BECAUSE WE USED CREATESLICE WHICH
      // ACCOMPLISHES THAT UNDER THE HOOD
      // pushes randomly generated id plus action in payload
      state.posts.push({
        id: Math.floor(Math.random() * 10000000),
        ...action.payload,
      });
    },
    editPost: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );
      state.posts[postIdx] = action.payload;
    },
  },
  // selectors: {
  //   selectPost: (state, id) => state.posts.find((element) => element.id == id),
  // },
});

export const selectPostById = (state, id) =>
  state.posts.posts.find((post) => post.id == id);

export const { createPost, editPost } = postSlice.actions;

export const { selectPost } = postSlice.selectors;

export default postSlice.reducer;
