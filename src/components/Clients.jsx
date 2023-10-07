import React from "react";
import ClientCard from "./ClientCard";
import quote from "../assets/images/bg-quotes.png";
import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

const Clients = () => {
  return (
    <section className="bg-[var(--darkBlueMainBG)] flex flex-row flex-wrap items-end justify-center gap-6 px-6 whitespace-break-spaces pt-28">
      <div className="w-max">
        <img src={quote} alt="quotes" className="w-[30px]" />
        <ClientCard
          img={profile1}
          author={"Satish Patel"}
          role={"Founder & CEO, Huddle"}
          text={
            "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          }
        />
      </div>
      <ClientCard
        img={profile2}
        author={"Bruce McKenzie"}
        role={"CoFounder, Techie"}
        text={
          "Fylo has revolutionized our file management system. Its intuitive interface and powerful features have streamlined our workflow, making collaboration a breeze."
        }
      />
      <ClientCard
        img={profile3}
        author={"Iva Boyd"}
        role={"CMO, Printy"}
        text={
          "Fylo has made file management a joy. It's sleek, powerful, and has boosted our productivity. We can't imagine working without it!"
        }
      />
    </section>
  );
};

export default Clients;
