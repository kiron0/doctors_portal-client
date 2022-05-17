import React from "react";
import chair from "../../Assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="px-[10px] lg:px-0 md:px-0 mx-auto">
      <div
        className={`hero min-h-screen bg-cover bg-center lg:bg-blend-overlay lg:bg-[url(https://i.ibb.co/3s2Hp8s/bg.png)]`}
      >
        <div className="hero-content flex-col lg:flex-row-reverse flex-shrink-0">
          <img
            src={chair}
            className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded-lg py-10"
            alt=""
          />
          <div className="lg:w-1/2 w-full lg:py-20 mb-6 lg:mb-0 py-6">
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
