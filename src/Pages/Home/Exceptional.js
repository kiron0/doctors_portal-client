import React from "react";
import treatment from "../../Assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Exceptional = () => {
  return (
    <section className="px-[10px] lg:px-0 md:px-[25px] mx-auto">
      <div className="hero min-h-screen bg-cover bg-center bg-blend-overlay pb-[80px]">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img
            src={treatment}
            className="lg:max-w-lg md:max-w-xs max-w-100 rounded-lg"
            alt="treatment"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mt-[-2rem] md:[-0rem] lg:[-0rem]">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton className="btn btn-primary">Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exceptional;
