import React from "react";

const ClientCard = ({ img, text, author, role }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-[--darkBlueTestimonials] max-w-[340px]">
      <p className="text-sm">{text}</p>
      <div className="flex justify-center items-center gap-2 w-max">
        <img src={img} alt={author} className="max-w-[40px] rounded-full" />
        <div className="text-xs opacity-90">
          <p className="font-bold">{author}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
