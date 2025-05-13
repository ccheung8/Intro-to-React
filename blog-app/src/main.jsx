import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import {
  AllPosts,
  CreatePost,
  EditPost,
  SearchPost,
  ViewPost,
} from "./pages/index.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route index element={<App />} />
            <Route path="create" element={<CreatePost />} />
            <Route path="posts">
              <Route index element={<AllPosts />} />
              <Route path=":id">
                <Route index element={<ViewPost />} />
                <Route path="edit" element={<EditPost />} />
              </Route>
            </Route>
            <Route path="search" element={<SearchPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
