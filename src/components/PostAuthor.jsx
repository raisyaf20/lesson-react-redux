import React from "react";
import { selectAllUsers } from "../features/users/userSlice";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((e) => e.id == userId);

  return <div>by {author ? author.name : "unknown author"}</div>;
};

export default PostAuthor;
