import React from "react";
import ilustrationIntro from "../assets/images/illustration-intro.png";
import bgCurvyMobile from "../assets/images/bg-curvy-mobile.svg";
import bgCurvyDesktop from "../assets/images/bg-curvy-desktop.svg";

const Hero = () => {
  return (
    <section className="relative md:h-screen">
      <div className="flex flex-col gap-4 justify-center items-center p-6">
        <div className="max-w-[320px] md:max-w-[540px]">
          <img src={ilustrationIntro} alt="people saving files" />
        </div>
        <div className="text-center flex flex-col items-center gap-4 px-2 max-w-[500px] md:max-w-[680px]">
          <h1 className="font-bold text-2xl leading-8 md:text-4xl">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="opacity-90 md:text-lg text-sm max-w-[400px] md:max-w-[500px]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <button className="px-20 py-4 bg-[var(--blue)] rounded-full font-bold">
          Get Started
        </button>
      </div>
      <div className="absolute bottom-0 w-full -z-10 h-[100%] flex flex-col justify-end">
        <img
          src={bgCurvyMobile}
          alt="curvy bg"
          className="w-full h-1/5 sm:hidden"
        />
        <img
          src={bgCurvyDesktop}
          alt="curvy bg"
          className="w-full hidden sm:block"
        />
        <div className="bg-[var(--darkBlueMainBG)] h-[40%] sm:h-[20%] lg:h-0"></div>
      </div>
    </section>
  );
};

export default Hero;
