import "./App.css";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function App() {
  const topPosts = useSelector((state) => state.posts.posts);

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
    </>
  );
}

export default App;
