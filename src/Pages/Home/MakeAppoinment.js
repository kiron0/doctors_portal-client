import React from "react";
import doctor from "../../Assets/images/doctor-small.png";
import appointment from "../../Assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex justify-center items-center lg:mt-24"
    >
      <div className=" flex flex-col lg:flex-row justify-center items-center mx-auto container">
        <div className="flex-1 hidden lg:flex justify-center items-end">
          <img className="mt-[-120px] max-w-2xl" src={doctor} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center px-6 leading-loose items-start py-8 lg:py-0">
          <p className="text-secondary text-xl font-bold mb-3">Appointment</p>
          <p className="text-4xl text-white font-bold mb-3">
            Make an appointment Today
          </p>
          <p className="text-white mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
