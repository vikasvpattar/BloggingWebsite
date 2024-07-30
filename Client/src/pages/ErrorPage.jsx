import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="flex flex-col h-screen justify-center items-center text-center gap-2">
        <Link className="bg-gray-900 text-white px-6 py-3 rounded-xl" to="/">
          Go Back To Home
        </Link>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
      </div>
    </section>
  );
};

export default ErrorPage;
