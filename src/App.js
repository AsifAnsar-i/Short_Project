import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostCard from "./components/PostCard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postSlug" element={<PostCard />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
