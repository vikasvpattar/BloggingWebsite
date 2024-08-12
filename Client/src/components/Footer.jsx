import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Agriculture",
  "Business",
  "Education",
  "Entertainment",
  "Art",
  "Investment",
  "Weather",
];

const Footer = () => {
  return (
    <footer className="bg-slate-800 mt-16 pt-10 pb-4 text-white">
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 max-w-full overflow-hidden">
        {categories.map((category) => (
          <li
            key={category}
            className="bg-gray-700 rounded-lg px-3 py-1 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900 text-center whitespace-nowrap"
          >
            <Link to={`/posts/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <div className="text-center border-t border-slate-700 pt-4">
        <small>All Rights Reserved &copy; Copyright, Dev Blogs.</small>
      </div>
    </footer>
  );
};

export default Footer;
