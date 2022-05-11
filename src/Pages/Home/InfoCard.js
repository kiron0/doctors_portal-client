import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl flex justify-center items-center ${bgClass}`}>
      <figure className="pl-5 lg:py-14">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotify app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
