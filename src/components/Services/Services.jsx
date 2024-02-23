import React from "react";
import whiteCar from "../assets/carSide.png";
import car2 from "../assets/carFront1.png";
import car3 from "../assets/carFront2.png";
import carwash from "../assets/carWash1.png";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
  },
];

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const testimonialData = [
  {
    name: "Dilshad",
    image:
      "https://images.pexels.com/photos/20220697/pexels-photo-20220697/free-photo-of-man-in-flat-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    star: "⭐⭐⭐⭐",
  },
  {
    name: "Satya",
    image:
      "https://images.pexels.com/photos/14966493/pexels-photo-14966493/free-photo-of-man-wearing-jumper-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    star: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Sabir",
    image:
      "https://images.pexels.com/photos/20225755/pexels-photo-20225755/free-photo-of-model-in-a-black-fedora-and-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    star: "⭐⭐⭐⭐",
  },
];

const Services = () => {
  return (
    <div>
      <div className="flex flex-col mt-10 flex-wrap justify-center items-center">
        <h1
          data-aos="zoom-in"
          data-aos-delay="600"
          className="lg:text-5xl md:text-4xl text-4xl font-bold"
        >
          Save <span className="text-red-800">big</span> with <br /> our cheap
          car rental!
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="800"
          className="text-gray-600 mt-6"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellendus, nemo!
        </p>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1000"
            className="flex flex-wrap mt-11 gap-y-16 justify-around"
          >
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="h-[220px] w-[300px] border-2 bg-slate-200 border-gray-300 hover:border-primary p-3 rounded-xl group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[140px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary text-xl text-red-800 font-semibold">
                    {data.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a
                      className="bg-orange-800 p-2 w-[65px] text-white text-[15px] rounded-3xl"
                      href="#"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink justify-center pt-5 mt-5 items-center">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:text-5xl lg:pl-10 md:pl-10 md:text-3xl text-4xl font-semibold text-red-800"
          >
            Car Wash
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xl text-center pt-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
            nemo ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit consequatur nostrum, sit numquam repudiandae atque placeat
            dolores quia ea minus quam mollitia asperiores, adipisci laboriosam
            odio voluptate, in minima possimus.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="items-center justify-center"
          >
            <img src={carwash} alt="" className="h-100" />
          </div>
        </div>
      </div>
      <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="card text-center group bg-gray-800 space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-slate-300 duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-14 sm:pb-24">
        <div>
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-center sm:px-44"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black"
          >
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 bg-gray-800 hover:bg-slate-300 duration-300 text-white hover:text-black  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">{skill.star}</div>
                <p className="text-gray-500">{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
