import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editPost, selectPostById } from "../store/postSlice";

export function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const post = useSelector((state) => selectPostById(state, id));

  function handleEditPost(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    dispatch(editPost(data));
    navigate(`/posts/${post.id}`);
  }

  return (
    <>
      <div className="d-flex flex-column gap-2">
        <h1>Edit Post</h1>
        <div className="d-flex flex-column mb-3 align-items-center">
          <form
            onSubmit={handleEditPost}
            className="form-group w-100 d-flex flex-column gap-2"
          >
            <input
              type="number"
              name="id"
              id="id"
              value={post.id}
              hidden
              readOnly
            />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="border border-dark rounded-1 ps-2"
              defaultValue={post.title}
              required
            />
            <textarea
              className="form-control border border-dark rounded-1 ps-2"
              id="content"
              rows="2"
              name="content"
              placeholder="Post text here.."
              defaultValue={post.content}
              required
            ></textarea>
            <select
              name="category"
              id="category"
              defaultValue={post.category}
              required
            >
              <option value="" disabled>
                Choose a category...
              </option>
              <option value="business">Business</option>
              <option value="educational">Educational</option>
              <option value="entertainment">Entertainment</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
              <option value="health">Health</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="technology">Technology</option>
            </select>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
