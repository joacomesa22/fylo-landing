import React from "react";
import iconArrow from "../assets/images/icon-arrow.svg";
import ilustrationProductive from "../assets/images/illustration-stay-productive.png";

const Productive = () => {
  return (
    <section className="bg-[var(--darkBlueMainBG)] pt-28">
      <div className="p-6 flex flex-col justify-center items-center lg:flex-row gap-6 md:gap-20">
        <div className="max-w-[600px]">
          <img
            src={ilustrationProductive}
            alt="ilustration of people being productive"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 items-start max-w-[600px]">
          <h4 className="font-bold text-lg sm:text-4xl">
            Stay productive, wherever you are
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <a
            href="#"
            className="text-[var(--cyan)] pb-2 border-b border-[var(--cyan)] text-sm group"
          >
            See how Fylo Works
            <img
              src={iconArrow}
              alt="arrow"
              className="inline-block w-[20px] ml-[2px] group-hover:ml-[8px] duration-100"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Productive;
