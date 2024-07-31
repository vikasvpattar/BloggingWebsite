import React, { useState } from "react";
import { DummyPosts } from "../data";
import PostsItem from "../components/PostsItem";

const CategoryPosts = () => {
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

export default CategoryPosts;
