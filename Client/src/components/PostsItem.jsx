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
    // Removes empty paragraphs and trims whitespace between tags

    return html
      .replace(/<p>/g, '<span style="display:inline;">') // Convert <p> to inline
      .replace(/<\/p>/g, "</span>") // Close <span>
      .replace(/<h[1-6]>/g, '<span style="display:inline; font-weight:bold;">') // Convert <h1>-<h6> to inline with bold
      .replace(/<\/h[1-6]>/g, "</span>"); // Close <span>
  };
  return (
    <article className="bg-slate-800/60 backdrop-blur-md border-slate-700 p-4 pb-8 rounded-lg shadow-sm hover:bg-slate-800 transition-shadow duration-200 border max-w-full overflow-hidden">
      <div className="rounded-md h-48 sm:h-64 overflow-hidden w-full">
        <img
          className="w-full h-full object-cover"
          src={`${import.meta.env.VITE_APP_ASSETS_URL}/uploads/${thumbnail}`}
          alt={title}
        />
      </div>
      <div className="mt-4">
        <Link to={`/posts/${postID}`}>
          <h3 className="text-lg font-bold hover:text-emerald-400 text-blue-600 transition-colors duration-200 break-words">
            {postTitle}
          </h3>
        </Link>
        <p
          className="break-words"
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
