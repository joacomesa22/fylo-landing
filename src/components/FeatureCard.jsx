import React from "react";

const FeatureCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <img src={img} alt={title} className="max-w-[90px]" />
      <div className="flex flex-col items-center text-center gap-3">
        <h4 className=ljfhdjkfhd"font-bold text-lg md:text-xl">{title}</h4>
        <p className="text-sm max-w-[300px]">{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
