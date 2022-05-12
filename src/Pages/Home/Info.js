import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../Assets/icons/clock.svg";
import marker from "../../Assets/icons/marker.svg";
import phone from "../../Assets/icons/phone.svg";

const Info = () => {
  return (
    <section className="container px-[25px] mx-auto mt-[-2.5rem] lg:mt-6 md:mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <InfoCard
          cardTitle="Opening Hours"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={clock}
        ></InfoCard>
        <InfoCard
          cardTitle="Our Locations"
          bgClass="bg-accent"
          img={marker}
        ></InfoCard>
        <InfoCard
          cardTitle="Contact Us"
          bgClass="bg-gradient-to-r from-secondary to-primary"
          img={phone}
        ></InfoCard>
      </div>
    </section>
  );
};

export default Info;
