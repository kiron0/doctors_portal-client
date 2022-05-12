import React from "react";
import chair from "../../Assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import './Banner.css';

const Banner = () => {
  return (
    <section className="px-[10px] lg:px-0 md:px-0 mx-auto">
      <div
        className="hero min-h-screen bg-cover bg-center lg:bg-blend-overlay custom"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:max-w-lg md:max-w-md max-w-100 rounded-lg mb-5 lg:mb-[0rem]"
            alt=""
          />
          <div className="md:container md:mt-6">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
