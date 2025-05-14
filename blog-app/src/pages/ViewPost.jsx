import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectPost, selectPostById } from "../store/postSlice";

export function ViewPost() {
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
