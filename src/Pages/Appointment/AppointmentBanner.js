import React from "react";
import chair from "../../Assets/images/chair.png";
import bg from "../../Assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section>
      <div
        className="hero min-h-screen bg-cover bg-center bg-blend-overlay lg:pt-[100px] px-2"
        style={{
          background: `url(${bg})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-32 py-12 lg:py-0">
          <img
            src={chair}
            className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded-lg"
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
