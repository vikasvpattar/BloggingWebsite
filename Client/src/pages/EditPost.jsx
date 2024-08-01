import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const POST_CATEGORIES = [
    "Agriculture",
    "Business",
    "Education",
    "Entertainment",
    "Art",
    "Investment",
    "Uncategorized",
    "Weather",
  ];
  return (
    <section className="w-1/2 mx-auto mt-10">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-xl">Edit post</h2>
        <p className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">
          This is an error message
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            className="px-3 py-2 outline-none rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill
            className="bg-white h-40 overflow-scroll"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="jpg, png, jpeg"
          />
          <button
            className="px-3 py-2 bg-blue-700 rounded-lg text-white w-1/3 self-center	"
            type="submit"
          >
            Update post
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditPost;
