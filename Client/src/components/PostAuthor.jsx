import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
const PostAuthor = ({ createdAt, authorID }) => {
  const [author, setAuthor] = useState({});
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users/${authorID}`);
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  });
  return (
    <Link
      to={`/posts/users/${authorID}`}
      className="flex gap-4 mt-4 items-center"
    >
      <div className="">
        <img
          src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${
            author?.avatar
          }`}
          alt="Author"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col text-sm">
        <h5 className="font-semibold">{author?.name}</h5>
        <small className="text-gray-400">
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </small>
      </div>
    </Link>
  );
};

export default PostAuthor;
