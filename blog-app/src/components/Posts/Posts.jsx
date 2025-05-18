import React from "react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { deletePost, updateLikes } from "../../store/postSlice";

export function Posts({ posts }) {
  const dispatch = useDispatch();

  function handlePostLike(id) {
    dispatch(updateLikes(id));
  }

  function handleDeletePost(id) {
    dispatch(deletePost(id));
  }

  return (
    <ul className="d-flex gap-2 ps-0">
      {posts.map((post, idx) => (
        <li key={idx} className="card w-25">
          <div className="card-body">
            <h2 className="card-title mb-1">{post.title}</h2>
            <h6 className="card-subtitle text-body-secondary mb-2">
              {
                /* capitalizes first letter */
                post.category.charAt(0).toUpperCase() + post.category.slice(1)
              }
            </h6>
            <p className="card-text">{post.content}</p>
            <div className="d-flex">
              <Link
                to={`/posts/${post.id}`}
                className="btn btn-primary w-100 card-link"
              >
                View post
              </Link>
              <Link
                to={`/posts/${post.id}/edit`}
                className="btn btn-primary w-100 card-link"
              >
                Edit
              </Link>
            </div>
          </div>
          <button
            onClick={() => handlePostLike(post.id)}
            className="btn btn-success m-2"
          >
            Like {post.likes}
          </button>
          <button
            onClick={() => handleDeletePost(post.id)}
            className="btn btn-danger m-2"
          >
            Delete Post
          </button>
        </li>
      ))}
    </ul>
  );
}
