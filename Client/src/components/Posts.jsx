import React, { useState } from "react";
import PostsItem from "./PostsItem";
import { DummyPosts } from "../data.js";

const Posts = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="p-4 bg-gray-100 min-h-screen">
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostsItem
                key={id}
                postId={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="text-center pt-20 text-xl text-gray-500">
          No posts found
        </h2>
      )}
    </section>
  );
};

export default Posts;
