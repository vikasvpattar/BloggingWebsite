import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Free.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../context/userContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const renderNavLinks = () => {
    const links = currentUser?.id
      ? [
          { to: `/profile/${currentUser.id}`, label: currentUser.name },
          { to: "/create", label: "Create Post" },
          { to: "/authors", label: "Author" },
          { to: "/logout", label: "Logout" },
        ]
      : [
          { to: "/authors", label: "Author" },
          { to: "/login", label: "Login" },
        ];

    return links.map((link) => (
      <NavLink
        key={link.to}
        onClick={isMenuOpen ? toggleMenu : undefined}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "hover:text-blue-500"
        }
        to={link.to}
      >
        {link.label}
      </NavLink>
    ));
  };

  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border-b border-slate-600 border-opacity-60">
      <nav className="flex justify-between items-center h-16 px-4 md:px-6 lg:px-8 ">
        <Link to="/">
          <img className="w-32 md:w-40" src={logo} alt="Dev Blogs" />
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          {renderNavLinks()}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
        </button>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-4 p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg md:hidden border-b border-slate-600 border-opacity-20">
          {renderNavLinks()}
        </ul>
      )}
    </header>
  );
};

export default Header;
