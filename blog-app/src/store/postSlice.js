import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [{ id: 1, title: "initial", content: "initial" }],
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
  },
  // selectors: {
  //   selectPost: (state, id) => state.posts.find((element) => element.id == id),
  // },
});

export const selectPostById = (state, id) =>
  state.posts.posts.find((post) => post.id == id);

export const { createPost } = postSlice.actions;

export const { selectPost } = postSlice.selectors;

export default postSlice.reducer;
