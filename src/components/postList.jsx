import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "../features/posts/postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts = useSelector(selectAllPost);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="container mx-auto flex flex-col items-center">
      <div className="max-w-md w-full px-4 md:max-w-3xl">
        <div className="bg-gradient-to-br from-indigo-300 via-blue-400 to-sky-400 p-3 rounded-lg shadow-lg transition-all duration-500">
          <h1 className="font-bold text-2xl mb-3 text-slate-800">Posts List</h1>
          {orderedPosts.map((e, i) => (
            <div key={i} className="mb-4">
              <h2 className="font-semibold text-xl text-slate-800">
                {e.title}
              </h2>
              <p className="text-base text-slate-800">
                {e.content.substring(0, 100)}
              </p>
              <PostAuthor userId={e.id} />
              <TimeAgo time={e.date} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
