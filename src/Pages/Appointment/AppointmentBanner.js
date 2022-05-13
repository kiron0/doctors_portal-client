import React from "react";
import chair from "../../Assets/images/chair.png";
import bg from "../../Assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section>
      <div
        className="hero min-h-screen bg-cover bg-center bg-blend-overlay lg:pt-[100px] px-6"
        style={{
          background: `url(${bg})`,
        }}
      >
        <div className="hero-content justify-between flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className={`max-w-xs md:w-md lg:mx-w-lg rounded-lg px-4 lg:px-12 mx-auto`}
            alt=""
          />
          <div className="card bg-base-100 shadow-xl mx-auto">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
