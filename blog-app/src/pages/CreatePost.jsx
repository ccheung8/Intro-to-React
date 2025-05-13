import { useDispatch } from "react-redux";
import { createPost } from "../store/postSlice";
import { useNavigate } from "react-router";

export function CreatePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreatePost(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(createPost(data));
    e.target.reset(); // clear form data
    navigate("/posts");
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
