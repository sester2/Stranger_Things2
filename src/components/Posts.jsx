import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/index.js";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts();
      setPosts(result);
    };
    getPosts();
  });

  return (
    <div>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <div className="post-container" key={`all Post:${post._id}`}>
                <h1>{post.title}</h1>
                <h2>{post.author.username}</h2>
                <h3>{post.description}</h3>
                <h3>{post.price}</h3>
                <h3>{post.location}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
