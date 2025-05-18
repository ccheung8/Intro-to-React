import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        id: 1,
        title: "initial",
        likes: 0,
        comments: [],
        content: "initial",
        category: "technology",
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      // DON'T HAVE TO MAKE COPY OF STATE BECAUSE WE USED CREATESLICE WHICH
      // ACCOMPLISHES THAT UNDER THE HOOD
      // pushes randomly generated id plus action in payload
      state.posts.push({
        id: Math.floor(Math.random() * 10000000),
        likes: 0,
        comments: [],
        ...action.payload,
      });
    },
    editPost: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );
      state.posts[postIdx] = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
    updateLikes: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload
      );

      state.posts[postIdx].likes += 1;
    },
    updateComments: (state, action) => {
      const postIdx = state.posts.findIndex(
        (post) => post.id == action.payload.id
      );

      state.posts[postIdx].comments.push(action.payload.comment);
    },
  },
});

export const selectPostById = (state, id) =>
  state.posts.posts.find((post) => post.id == id);

export const searchPost = (state, searchQuery) => {
  if (searchQuery == "" || searchQuery == null) {
    return [];
  } else {
    return state.posts.posts.filter(
      (post) =>
        post.title.includes(searchQuery) || post.content.includes(searchQuery)
    );
  }
};

export const { createPost, editPost, deletePost, updateLikes, updateComments } =
  postSlice.actions;

export const { selectPost } = postSlice.selectors;

export default postSlice.reducer;
