import React from "react";
import { useEffect, useState } from "react";
import { fetchUserPosts } from "../api";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const newToken = localStorage.getItem("token");

      const result = await fetchUserPosts(newToken);

      setPosts(result);
    };
    getPosts();
  });
  return (
    <div>
      <button></button>
      {posts.map((post) => {
        return (
          <div className="post-container" key={`all Post:${post._id}`}>
            <h1>{post.title}</h1>
            <h2>{post.author.username}</h2>
            <h3>{post.description}</h3>
            <h3>{post.price}</h3>
            <h3>{post.location}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Profile;
