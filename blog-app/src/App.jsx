import "./App.css";
import { useSelector } from "react-redux";
import { Posts } from "./components/Posts/Posts";

function App() {
  const topPosts = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>Let Blog</h1>
      <h3>Top Posts:</h3>
      <Posts posts={topPosts} />
    </>
  );
}

export default App;
