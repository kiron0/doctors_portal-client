import React from "react";
import chair from "../../Assets/images/chair.png";
import bg from "../../Assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section>
      <div
        className="hero min-h-screen bg-cover bg-center bg-blend-overlay pt-[100px`]"
        style={{
          background: `url(${bg})`,
        }}
      >
        <div className="hero-content lg:w-1/2 justify-between flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className={`max-w-xs lg:max-w-2xl rounded-lg`}
            alt=""
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
