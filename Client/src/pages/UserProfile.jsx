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
    <section className=" w-1/2 p-4 rounded-xl mx-auto">
      <div className="flex flex-col items-center space-y-2">
        <Link
          to={`/myposts/asc`}
          className="bg-blue-700 text-white px-3 py-1 rounded-xl w-fit self-center"
        >
          My posts
        </Link>
        <div className="flex flex-col items-center relative">
          <div className="size-28 relative rounded-full overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="object-cover size-full"
            />
          </div>
          <form action="" className="h-4">
            <input
              className="hidden"
              type="file"
              name="avatar"
              id="avatar"
              accept="png,jpg,jpeg"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <label
              className="bg-blue-700 text-white absolute right-1  bottom-2 rounded-full size-8 grid place-items-center"
              htmlFor="avatar"
            >
              <FaEdit size={14} />
            </label>
          </form>
          <button className="bg-blue-700 text-white absolute right-1  bottom-2 rounded-full size-8 grid place-items-center">
            <FaCheck size={14} />
          </button>
        </div>
        <h1 className="font-bold text-xl">Michel</h1>
        <form className="w-full flex flex-col gap-3" action="">
          <p className="bg-red-500 text-white px-3 py-1 text-sm rounded-lg">
            This is an error message
          </p>
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="px-3 py-2 outline-none rounded-lg"
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-blue-700 rounded-lg text-white self-center	"
            type="submit"
          >
            Update details
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
