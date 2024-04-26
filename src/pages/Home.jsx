import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await res.json();
      setPosts(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className="p-40 ">
    <h1 className="text-3xl font-semibold text-black mb-4">Short Project</h1>
        {posts.map((post) => (
            <PostCard key={post} post={post} />
        ))}
    </div>
  );
};

export default Home;
