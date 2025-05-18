import { useState } from "react";
import { useSelector } from "react-redux";
import { searchPost } from "../store/postSlice";
import { Posts } from "../components/Posts/Posts";

export function SearchPost() {
  const [searchQuery, setSearchQuery] = useState();
  const posts = useSelector((state) => searchPost(state, searchQuery));

  return (
    <div className="d-flex flex-column gap-2">
      <h1>Search Post</h1>
      <div
        className="d-flex align-items-center border border-dark rounded-1"
      >
        <input
          type="text"
          placeholder="Find Article..."
          className="border-0 border-end border-dark rounded-start w-100 ps-2 py-2"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn btn-primary border-0 d-flex py-2"
          style={{ padding: "0 8px", background: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ width: "20px" }}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <div className="mt-4">
        <h3 className="pb-2">Search Results:</h3>
        {posts.length > 0 ? <Posts posts={posts} /> : <p>No Posts</p>}
      </div>
    </div>
  );
}
