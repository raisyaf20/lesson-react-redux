import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/posts/postSlice";
import { selectAllUsers } from "../features/users/userSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const savePosts = () => {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((e, i) => (
    <option value={e.id} key={i}>
      {e.name}
    </option>
  ));
  return (
    <section className="mb-6">
      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold text-cyan-500 lg:text-3xl">
          Add a New Post
        </h2>
        <form className="flex flex-col justify-center self-center gap-3 w-full px-4 mx-auto mt-4 sm:max-w-md lg:max-w-lg">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="w-[50%] ">
              <label htmlFor="postTitle" className="text-lg">
                Post Title
              </label>
              <input
                required
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                className="border border-slate-200 w-full p-1.5 rounded-lg  focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-[45%] ">
              <label htmlFor="postAuthor" className="text-lg">
                Author:
              </label>
              <select
                required
                id="postAuthor"
                value={userId}
                className="p-2 rounded-md ml-2 w-32 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                onChange={(e) => setUserId(e.target.value)}
              >
                <optgroup label="Choose Author">{usersOptions}</optgroup>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="postContent" className="text-lg">
              Content:
            </label>
            <textarea
              required
              id="postContent"
              name="postContent"
              value={content}
              placeholder="Write your content here"
              className="border border-slate-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={savePosts}
            className="bg-cyan-400 hover:bg-cyan-500 cursor-pointer p-1.5 rounded-full"
          >
            Save Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPost;
