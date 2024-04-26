import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="flex bg-purple-400 rounded-xl h-[200px] w-[500px]">
      <img src={post.picture.large} alt={post.name.first} className=" object-contain rounded-xl p-4" />
      <div className="flex flex-col gap-6 p-4">
        <div className="flex gap-6">
          <h2 className="text-2xl text-white font-semibold">{post.name.first}</h2>
          <p className="text-2xl text-white font-semibold">{post.name.last}</p>
        </div>
        <p className="text-2xl text-black font-semibold ">Gender:{" "}<span className="text-2xl text-white font-semibold">{post.gender}</span></p>
        <p className="text-2xl text-black font-semibold">Phone:{" "}<span className="text-2xl text-white font-semibold">{post.phone}</span></p>
      </div>
    </div>
  );
};

export default PostCard;
