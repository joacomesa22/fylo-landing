import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const handleEmail = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(email)) {
      setEmailError(true);
      setEmailSuccess(false);
    } else {
      setEmailError(false);
      setEmailSuccess(true);
      setEmail("");
    }
  };

  return (
    <section className="pt-72 bg-[var(--darkBlueMainBG)] px-6 relative">
      <div className="p-6 md:p-10 bg-[var(--darkBlueIntro)] absolute -bottom-24 left-2/4 -translate-x-2/4 w-[90%] max-w-[800px] flex flex-col gap-2 md:gap-4 justify-center items-center rounded-lg shadow-lg">
        <h3 className="text-xl md:text-3xl font-bold">
          Get early access today
        </h3>
        <p className="text-sm text-center max-w-[600px] opacity-90">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="w-full pt-4 max-w-[90%]">
          <form
            className="flex flex-col md:items-start md:flex-row gap-4"
            onSubmit={(e) => {
              handleEmail(e);
            }}
          >
            <div className="w-full h-[60px] text-center md:text-left">
              <input
                type="text"
                className="px-5 py-3 rounded-full w-full text-sm text-[var(--darkBlueFooter)] border-3"
                placeholder="email@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              {emailError && (
                <span className="text-[var(--lightRed)] text-[.8rem]">
                  {"Please enter a valid email adress"}
                </span>
              )}
              {emailSuccess && (
                <span className="text-lime-400 text-[.8rem]">
                  {"Succesfully submitted!"}
                </span>
              )}
            </div>
            <input
              type="submit"
              value={"Get Started for Free"}
              className="px-6 py-3 bg-gradient-to-r from-[var(--cyan)] to-[var(--blue)] rounded-full font-bold text-sm hover:brightness-110 duration-200 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
