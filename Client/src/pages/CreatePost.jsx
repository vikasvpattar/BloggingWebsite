import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const navigate = useNavigate();

  // Redirect to login page if the user is not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const createPost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("description", description);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(`${BASE_URL}/posts`, postData, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

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
    <section className="w-full max-w-4xl mx-auto mt-8 px-4 py-4 sm:p-6 md:p-8 lg:p-10 rounded-lg bg-slate-800 text-white">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl sm:text-3xl">Create Post</h2>
        {/* Conditionally render the error message if needed */}
        {error && (
          <p className="bg-red-500 text-white px-4 py-2 text-sm rounded-lg">
            {error}
          </p>
        )}
        <form  onSubmit={createPost} className="flex flex-col text-black gap-6">
          <input
            className="px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            className="px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {POST_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <ReactQuill
            className="bg-white rounded-lg h-64 overflow-auto"
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
          />
          <input
            type="file"
            className="border border-slate-600 px-4 py-3 rounded-lg text-white"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="image/jpg, image/png, image/jpeg"
          />
          <button
            className="px-6 py-3 bg-blue-700 rounded-lg text-white w-full sm:w-auto self-center hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
