import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="pt-40 md:pt-52 pb-10 md:pb-20 px-6 bg-[var(--darkBlueFooter)]">
      <div className="max-w-[1440px] mx-auto flex md:flex-row md:justify-between flex-col gap-10 md:flex-wrap">
        <div className="max-w-[200px]">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div className="flex justify-center items-center gap-4">
            <svg width="18" height="18">
              <path
                d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
                fill="#FFF"
              />
            </svg>
            <p className="max-w-[230px]">
              4405 Jager Dr NE, Rio Rancho, New York, United States
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <svg width="18" height="18">
              <path
                d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                fill="#FFF"
              />
            </svg>
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <svg width="20" height="16">
              <g fill="none">
                <path d="M-2-4h24v24H-2z" />
                <path
                  d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                  fill="#FFF"
                />
              </g>
            </svg>
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
          <div className="flex flex-col gap-4 w-[70px]">
            <a href="#" className="hover:font-bold">
              About
            </a>
            <a href="#" className="hover:font-bold">
              Jobs
            </a>
            <a href="#" className="hover:font-bold">
              Press
            </a>
            <a href="#" className="hover:font-bold">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-4 w-[70px]">
            <a href="#" className="hover:font-bold">
              Contact
            </a>
            <a href="#" className="hover:font-bold">
              Terms
            </a>
            <a href="#" className="hover:font-bold">
              Privacy
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="p-2 border border-[var(--white)] group hover:border-[var(--cyan)] cursor-pointer rounded-full w-max duration-100">
            <svg
              height="14px"
              width="14px"
              viewBox="0 0 320 512"
              className="fill-[var(--white)] group-hover:fill-[var(--cyan)] cursor-pointer duration-100"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </div>

          <div className="p-2 border border-[var(--white)] group hover:border-[var(--cyan)] cursor-pointer rounded-full w-max duration-100">
            <svg
              height="14px"
              width="14px"
              viewBox="0 0 512 512"
              className="fill-[var(--white)] group-hover:fill-[var(--cyan)] cursor-pointer duration-100"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </div>
          <div className="p-2 border border-[var(--white)] group hover:border-[var(--cyan)] cursor-pointer rounded-full w-max duration-100">
            <svg
              height="14px"
              width="14px"
              viewBox="0 0 448 512"
              className="fill-[var(--white)] group-hover:fill-[var(--cyan)] cursor-pointer duration-100"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
