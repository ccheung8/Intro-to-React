import React from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../store/postReducer";

export function CreatePost() {
  const dispatch = useDispatch();

  function handleCreatePost(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(postActions.createPost(data));
  }

  return (
    <div className="d-flex flex-column gap-2">
      <h1>Create Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <form
          onSubmit={handleCreatePost}
          className="form-group w-100 d-flex flex-column gap-2"
        >
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="border border-dark rounded-1 ps-2"
            required
          />
          <textarea
            className="form-control border border-dark rounded-1 ps-2"
            id="content"
            rows="2"
            name="content"
            placeholder="Post text here.."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
