import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-center py-4 lg:justify-between items-center rounded-2xl lg:px-[30px] text-white ${bgClass}`}>
      <figure className="w-[86px]">
        <img src={img} alt="Album" />
      </figure>
      <div className="py-2 lg:py-14 px-6">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotify app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
