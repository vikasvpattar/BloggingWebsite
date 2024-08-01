import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-16 pt-10 pb-4 text-white">
      <ul className="flex flex-wrap justify-center gap-4 mb-10">
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Agriculture">Agriculture</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Business">Business</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Education">Education</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Entertainment">Entertainment</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Art">Art</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Investment">Investment</Link>
        </li>
        <li className="bg-gray-700 rounded-lg px-2 py-3 transition ease-in-out delay-100 hover:bg-white hover:text-gray-900">
          <Link to="/post/categories/Weather">Weather</Link>
        </li>
      </ul>
      <div className="text-center border-t border-slate-700 pt-4">
        <small>All Rights Reserved &copy; Copyright, Dev Blogs.</small>
      </div>
    </footer>
  );
};

export default Footer;
