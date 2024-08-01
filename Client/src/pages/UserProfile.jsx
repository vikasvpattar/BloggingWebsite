import React, { useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <section className="w-full max-w-md mt-8 p-4 mx-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col items-center space-y-4">
        <Link
          to={`/myposts/asc`}
          className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          My posts
        </Link>
        <div className="relative flex flex-col items-center">
          <div className="relative rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
            <img
              src="https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <form className="absolute right-2 bottom-2 flex flex-col items-center">
            <input
              className="hidden"
              type="file"
              name="avatar"
              id="avatar"
              accept="png,jpg,jpeg"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <label
              className="bg-blue-700 text-white absolute right-1  bottom-0 rounded-full size-8 grid place-items-center"
              htmlFor="avatar"
            >
              <FaEdit size={16} />
            </label>
            <button className="bg-blue-700 text-white absolute right-1  bottom-0 rounded-full size-8 grid place-items-center">
              <FaCheck size={16} />
            </button>
          </form>
        </div>
        <h1 className="font-bold text-xl">Michel</h1>
        <form className="w-full flex flex-col gap-4">
          <p className="bg-red-500 text-white px-3 py-2 text-sm rounded-lg">
            This is an error message
          </p>
          <input
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-700 rounded-lg text-white font-semibold self-center"
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
