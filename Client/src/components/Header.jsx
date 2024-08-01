import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Free.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-slate-300 fixed top-0 left-0 z-10 border-b border-slate-600 backdrop-blur-sm">
      <nav className="flex justify-between items-center h-16 px-4 md:px-6 lg:px-8">
        <Link to="/">
          <img className="w-32 md:w-40" src={logo} alt="Dev Blogs" />
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
            to="/profile/ada"
          >
            Michal
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
            to="/create"
          >
            Create Post
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
            to="/authors"
          >
            Author
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
            to="/logout"
          >
            Logout
          </NavLink>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-4 p-4 bg-slate-300 md:hidden border-b border-slate-600">
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
              to="/profile/ada"
            >
              Michal
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
              to="/create"
            >
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
              to="/author"
            >
              Author
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
              to="/logout"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
