import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div className="w-[80%] md:w-[50%] lg:w-[30%] shadow-xl">
        <div className="card-body">
          <h2 className="text-7xl lg:text-9xl font-bold text-purple-400">404!</h2>
          <h3 className="text-2xl lg:text-6xl font-medium py-8">Oops! Page not found</h3>
          <p className="text-2xl pb-8 lg:px-12 font-medium">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white btn btn-primary font-semibold px-6 py-3 rounded-md mr-6"><Link to="/">Home</Link></button>

            <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white btn btn-secondary font-semibold px-6 py-3 rounded-md"><Link to="/">Contact Us</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
