import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { SiGoogleearthengine } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import ServiceCards from "./ServiceCards";

export default function CarRepair() {
  const icon1 = <GiCarWheel className=" text-green-500 mx-auto" size={48} />;
  const icon2 = (
    <SiGoogleearthengine className=" text-green-500 mx-auto" size={48} />
  );
  const icon3 = (
    <MdDesignServices className=" text-green-500 mx-auto" size={48} />
  );

  const icon4 = <IoSettings className=" text-green-500 mx-auto" size={48} />;
  const icon5 = <FaCar className=" text-green-500 mx-auto" size={48} />;
  const icon6 = (
    <SiCoronaengine className=" text-green-500 mx-auto" size={48} />
  );

  return (
    <div className="pt-14">
      <div>
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className=" font-bold text-4xl text-center"
        >
          Our <span className=" text-primary">Services</span>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5"
      >
        <ServiceCards icon={icon1} title="Tires & Wheels" />
        <ServiceCards icon={icon2} title="Exhaust System" />
        <ServiceCards icon={icon3} title="Cars Maintenance" />
        <ServiceCards icon={icon4} title="Brake Repairs" />
        <ServiceCards icon={icon5} title="Body Service" />
        <ServiceCards icon={icon6} title="Engine Services" />
      </div>

      <div className="flex flex-col mt-10 p-20 bg-slate-300 justify-center items-center">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:text-3xl md:text-2xl text-3xl font-semibold"
        >
          OUR LATEST SPECIALS
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:text-5xl md:text-4xl text-4xl font-bold"
        >
          ANY SERVCIE OF <span className="text-red-800">$250</span> OR MORE
        </p>
        <p data-aos="fade-up" data-aos-delay="600" className="text-gray-600">
          We value our clients, that’s why we want to give you this special
          discount in order for you to use it to make your car more safe and
          feel confident when on the road!
        </p>
      </div>
    </div>
  );
}
