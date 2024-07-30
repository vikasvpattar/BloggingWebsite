import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Free.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="w-full flex h-16 justify-between items-center bg-slate-300 z-10 fixed top-0 left-0 border-b border-slate-600 filter backdrop-blur-sm">
      <Link to={"/"}>
        <img className="w-40 block" src={logo} alt="Dev Blogs" />
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <NavLink to="/profile">Michal</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create Post</NavLink>
        </li>
        <li>
          <NavLink to="/author">Author</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
      <button className="hidden">
        <FaBars />
      </button>
    </nav>
  );
};

export default Header;
