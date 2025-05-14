import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export function AllPosts() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>All posts</h1>
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
          </li>
        ))}
      </ul>
    </>
  );
}
