import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export function ViewPost() {
  const posts = useSelector((state) => state.posts.posts);
  const { id } = useParams();

  function viewPost() {
    const post = posts.find((element) => element.id == id);
    return post;
  }

  const post = viewPost();

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
