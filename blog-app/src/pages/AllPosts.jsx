import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Posts } from "../components/Posts/Posts";

export function AllPosts() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>All posts</h1>
      <Posts posts={posts} />
    </>
  );
}
