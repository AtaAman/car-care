import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import Cards from "./Card";

export default function Contact() {
  const icon1 = <FaPhoneAlt className=" text-red-800 mx-auto" size={48} />;
  const icon2 = <CgMail className=" text-red-800 mx-auto" size={48} />;
  const icon3 = (
    <FaRegAddressCard className=" text-red-800 mx-auto" size={48} />
  );

  return (
    <>
      <div className="flex flex-col flex-shrink  pt-5 mt-5 justify-center gap-7 items-center">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:text-5xl md:text-4xl text-4xl font-bold"
        >
          Contact us for
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:text-3xl md:text-2xl text-center text-3xl font-semibold text-red-800"
        >
          Car rent | Car wash | Car repair{" "}
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="grid justify-items-center p-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5"
      >
        <Cards
          icon={icon1}
          title="Phone"
          title1="+91 8384****02"
          title2="+91 8603****96"
        />
        <Cards icon={icon2} title="Email" title1="carcarewithus@carcare.com" />
        <Cards
          icon={icon3}
          title="Address"
          title1="Nehru Place

City:   Delhi

State/province/area:    Delhi

Zip code:  110019

Country:  India"
        />
      </div>
    </>
  );
}
