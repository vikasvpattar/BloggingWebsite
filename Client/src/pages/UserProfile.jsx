import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Loader from "../components/Loader.jsx";
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const UserProfile = () => {
  const [avatar, setAvatar] = useState(null); // Adjusted to store the file object
  const [avatarPreview, setAvatarPreview] = useState(""); // For preview
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${BASE_URL}/users/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });
      const { name, email, avatar } = response.data;
      setAvatarPreview(avatar); // Set preview URL
      setName(name);
      setEmail(email);
    };
    getUser();
  }, [id, token]);

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    if (!avatar) return; // Ensure avatar is not null

    try {
      const postData = new FormData();
      postData.append("avatar", avatar); // Ensure file is correctly appended

      const response = await axios.post(
        `${BASE_URL}/users/change-avatar`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      setAvatarPreview(response?.data.avatar);
      toast.success("Successfully changed the avatar");
    } catch (error) {
      console.log(error);
      toast.error("Failed to change avatar");
    }
  };

  const updateUserDetails = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      if (
        !name ||
        !email ||
        !currentPassword ||
        !newPassword ||
        !confirmNewPassword
      ) {
        toast.error("Fill in all fields.");
        setIsLoading(false); // Stop loading when validation fails
        return;
      }

      const userData = {
        name,
        email,
        currentPassword,
        newPassword,
        confirmNewPassword,
      };

      const response = await axios.patch(
        `${BASE_URL}/users/edit-user`,
        userData,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        toast.success("Details updated");
        navigate("/"); // Refresh the page
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false); // Ensure loading stops in all cases
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="w-full max-w-md mt-8 p-4 mx-auto bg-slate-800/60 backdrop-blur-md rounded-xl shadow-md border border-slate-700">
      <div className="flex flex-col items-center space-y-4">
        <Link
          to={`/myposts/${currentUser?.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          My posts
        </Link>
        <div className="relative flex flex-col items-center">
          <div className="relative rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
            <img
              src={avatarPreview} // Show the preview URL
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <form
            encType="multipart/form-data"
            method="post"
            className="absolute right-2 bottom-2 flex flex-col items-center"
          >
            <input
              className="hidden"
              type="file"
              name="avatar"
              id="avatar"
              accept="image/png, image/jpg, image/jpeg"
              onChange={(e) => {
                setAvatar(e.target.files[0]); // Set file object
                setAvatarPreview(URL.createObjectURL(e.target.files[0])); // Show preview
                setIsAvatarTouched(true);
              }}
            />
            <label
              onClick={() => setIsAvatarTouched(true)}
              className="bg-blue-600 text-white absolute right-1 bottom-0 rounded-full size-8 grid place-items-center cursor-pointer"
              htmlFor="avatar"
            >
              <FaEdit size={16} />
            </label>
            {isAvatarTouched && (
              <button
                onClick={changeAvatarHandler}
                type="button"
                className="bg-blue-600 text-white absolute right-1 bottom-0 rounded-full size-8 grid place-items-center"
              >
                <FaCheck size={16} />
              </button>
            )}
          </form>
        </div>
        <h1 className="font-bold text-xl text-gray-100">{currentUser.name}</h1>
        <form
          onSubmit={updateUserDetails}
          className="w-full flex flex-col gap-4"
        >
          {error && (
            <p className="bg-red-500 text-white px-3 py-2 text-sm rounded-lg">
              {error}
            </p>
          )}
          <input
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold self-center hover:bg-blue-700 transition-colors duration-200"
            type="submit"
          >
            Update Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
