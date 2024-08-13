import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsItem = ({
  postID,
  title,
  thumbnail,
  description,
  authorID,
  category,
  createdAt,
}) => {
  const shortDesc =
    description.length > 145 ? description.substr(0, 145) + "..." : description;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;

  const removeExtraSpaceBetweenTags = (html) => {
    return html
      .replace(/<p>/g, '<span style="display:inline;">')
      .replace(/<\/p>/g, "</span>")
      .replace(/<h[1-6]>/g, '<span style="display:inline; font-weight:bold;">')
      .replace(/<\/h[1-6]>/g, "</span>");
  };

  return (
    <article className="bg-slate-800/60 backdrop-blur-md border-slate-700 p-4 rounded-lg shadow-sm hover:bg-slate-800 transition-shadow duration-200 border max-w-full overflow-hidden flex flex-col h-full">
      <div className="rounded-md h-48 sm:h-64 overflow-hidden w-full">
        <img
          className="w-full h-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-grow mt-4">
        <Link to={`/posts/${postID}`}>
          <h3 className="text-lg font-bold hover:text-emerald-400 text-blue-600 transition-colors duration-200 break-words">
            {postTitle}
          </h3>
        </Link>
        <p
          className="break-words flex-grow"
          dangerouslySetInnerHTML={{
            __html: removeExtraSpaceBetweenTags(shortDesc),
          }}
        ></p>
        <div className="flex justify-between items-center mt-4">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link
            className="text-sm text-white bg-blue-600 rounded-md px-3 py-1 hover:bg-blue-700 transition-colors duration-200"
            to={`/posts/categories/${category}`}
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostsItem;
