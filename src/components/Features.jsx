import React from "react";
import FeatureCard from "./FeatureCard";
import iconAccess from "../assets/images/icon-access-anywhere.svg";
import iconSecurity from "../assets/images/icon-security.svg";
import iconCollab from "../assets/images/icon-collaboration.svg";
import iconFile from "../assets/images/icon-any-file.svg";

const Features = () => {
  return (
    <section className="bg-[var(--darkBlueMainBG)] flex justify-center items-center pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] w-full">
        <FeatureCard
          img={iconAccess}
          title={"Access your files, anywhere"}
          text={
            "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
          }
        />
        <FeatureCard
          img={iconSecurity}
          title={"Security you can trust"}
          text={
            " 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
          }
        />
        <FeatureCard
          img={iconCollab}
          title={"Real-time collaboration"}
          text={
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
          }
        />
        <FeatureCard
          img={iconFile}
          title={"Store any type of file"}
          text={
            "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
          }
        />
      </div>
    </section>
  );
};

export default Features;
