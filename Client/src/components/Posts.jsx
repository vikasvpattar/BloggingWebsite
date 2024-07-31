import React, { useState } from "react";
import PostsItem from "./PostsItem";
import { DummyPosts } from "../data.js";

const Posts = () => {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section>
      {posts.length > 0 ? (
        <div className="grid grid-cols-3 gap-16">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostsItem
                key={id}
                postID={id}
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
        <h2 className="text-center pt-20 ">No posts found</h2>
      )}
    </section>
  );
};

export default Posts;
