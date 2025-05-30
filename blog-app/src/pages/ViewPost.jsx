import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, selectPostById, updateComments } from "../store/postSlice";
import { useState } from "react";

export function ViewPost() {
  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));
  const dispatch = useDispatch();
  const [comment, setComment] = useState();

  function handleAddComment() {
    dispatch(
      updateComments({
        id: id,
        comment: comment,
      })
    );
  }

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <textarea
        name="content"
        className="form-control"
        id="comment"
        rows="2"
        placeholder="Comment text here.."
        required
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="btn btn-primary mt-2" onClick={handleAddComment}>
        Post comment
      </button>
      <h3 className="mt-2">Comments ({post.comments.length}):</h3>
      {post.comments.length > 0 ? (
        post.comments.map((comment) => <p>{comment}</p>)
      ) : (
        <p>No Comments Yet</p>
      )}
    </>
  );
}
