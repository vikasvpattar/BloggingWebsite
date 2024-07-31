import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";

const PostDetails = () => {
  return (
    <section className="w-1/2 bg-white mx-auto p-4 rounded-xl ">
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <PostAuthor />
          <div className="flex gap-2">
            <Link
              to={`/posts/nsbs/edit`}
              className="px-3  py-1 bg-blue-700 text-white rounded-md"
            >
              Edit
            </Link>
            <Link
              to={`/posts/nsbs/delete`}
              className="px-3  py-1 bg-red-700 text-white rounded-md"
            >
              Delete
            </Link>
          </div>
        </div>
        <h1 className="text-xl font-bold">This is the post title</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptas tenetur. Quod aperiam quibusdam nemo, expedita atque
          inventore? Amet distinctio quisquam delectus natus totam, a accusamus
          repellendus explicabo velit quidem, dolor voluptates expedita
          accusantium aliquam? Accusamus vero quod nesciunt nihil ratione quos,
          ullam repudiandae vitae a perferendis quaerat id esse! Aperiam esse
          illum autem asperiores quasi, nihil sequi reiciendis vel fuga aut
          iusto blanditiis. Iusto deserunt exercitationem maiores magni
          provident ducimus sit? Excepturi fuga quos, velit culpa corporis esse!
          Molestias porro soluta beatae saepe, nemo est minus fuga odio ad
          aspernatur repellat obcaecati harum laborum natus iure labore.
          Pariatur, cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          suscipit rerum quam quaerat praesentium laboriosam aperiam consequatur
          architecto eaque? Iste aspernatur placeat enim at consequatur omnis
          neque officiis molestias! Excepturi necessitatibus odio labore
          consectetur praesentium voluptatum, enim, quis earum porro tempore
          aliquam ut error dicta ipsum, vel magni neque. At?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          totam expedita eligendi itaque beatae repudiandae fugit quis id nihil
          dignissimos, corporis mollitia error velit repellendus perferendis
          debitis alias rerum possimus! Enim dolorem corrupti minima sint quod
          dolor repellat magni nisi recusandae quia hic amet sapiente porro,
          odit labore quas eligendi illum distinctio. Blanditiis, cumque soluta.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
