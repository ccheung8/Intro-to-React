import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { decrement, decrementByValue, increment, incrementByValue } from "./store/counterSlice";

function App() {
  const topPosts = useSelector((state) => state.posts.posts);
  const count = useSelector((state) => state.counter.count);

  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Let Blog</h1>
      <h3>Top Posts:</h3>
      <ul className="d-flex gap-2 ps-0">
        {topPosts.map((post, idx) => (
          <li key={idx} className="card w-25">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.content}</p>
            </div>
            <div className="d-flex gap-2 m-2">
              <Link to={`/posts/${post.id}`} className="btn btn-primary w-100">
                View post
              </Link>
              <Link
                to={`/posts/${post.id}/edit`}
                className="btn btn-primary w-100"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <h3>Counter</h3>
      <p>
        <input type="number" onChange={(e) => setIncrementValue(e.target.value)} />
        <input type="number" onChange={(e) => setDecrementValue(e.target.value)} />
        <button onClick={() => dispatch(incrementByValue(incrementValue))}>+</button>
        {count}
        <button onClick={() => dispatch(decrementByValue(decrementValue))}>-</button>
      </p>
    </>
  );
}

export default App;
