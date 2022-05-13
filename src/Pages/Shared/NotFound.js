import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const NotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div className="flex items-center justify-center py-12 px-2 mx-auto lg:px-0">
        <div className="bg-base-100 shadow-xl items-center justify-center mx-4 md:w-2/3 rounded-lg">
          <div className="flex flex-col items-center py-16 lg:px-32 md:px-32">
            <img
              className="px-4 hidden md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center  text-5xl font-bold leading-10">
              OOPS!
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center">
              No signal here! we cannot find the page you are looking for
            </p>
            <PrimaryButton>
              <Link to="/" className="text-white no-underline">
                Go Home
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
