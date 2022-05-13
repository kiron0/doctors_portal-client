import React from "react";

const AvailableCard = ({ service }) => {
  const { name } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl py-8">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold text-secondary">{name}</h2>
      </div>
    </div>
  );
};

export default AvailableCard;
