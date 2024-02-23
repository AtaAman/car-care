import React, { useEffect, useState } from "react";
import carfront1 from "../assets/carFront1.png";
import carside from "../assets/carSide.png";
import carwash from "../assets/carWash1.png";
import { Link } from "react-router-dom";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <>
      <div className="flex flex-wrap h-[100%] items-center justify-around pt-5">
        <div className="items-center  pt-5 mt-5 justify-center">
          <img
            data-aos="zoom-in"
            data-aos-delay="700"
            src={carfront1}
            alt=""
            className="h-40 md:h-60 lg:h-80"
          />
        </div>

        <div className="flex flex-col flex-shrink  pt-5 mt-5 justify-center gap-7 items-start max-w-[50%]">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:text-3xl md:text-2xl text-3xl text-black font-semibold"
          >
            Hello Car Lovers! get
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:text-5xl md:text-4xl text-4xl font-bold"
          >
            <span className="text-red-800">35%</span> off on any services
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Beatae maiores sint Lorem, ipsum.
          </p>
          <button
            data-aos="fade up"
            data-aos-delay="500"
            className="bg-red-700 w-[100px] p-2 text-white mb-5 rounded-3xl"
          >
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink  justify-center gap-7 items-start max-w-[50%]">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className=" lg:pl-10 md:pl-10 lg:text-3xl md:text-2xl text-3xl font-bold"
          >
            Book a car
          </p>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-gray-600 lg:pl-10 md:pl-10 pl-1"
          >
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis, est! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam cumque accusantium Lorem, ipsum.
          </p>
        </div>

        <div className="items-center mt-20 p-10 justify-center">
          <img
            data-aos="zoom-in"
            data-aos-delay="300"
            src={carside}
            alt=""
            className="h-40 md:h-60 lg:h-80"
          />
        </div>
      </div>

      <div className="flex flex-wrap flex-col items-center justify-around mt-5 pt-5">
        <div className="flex flex-col flex-shrink items-start pt-5 mt-5">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="lg:text-3xl md:text-2xl text-3xl font-bold"
          >
            Leading car <span className="text-red-800">wash</span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:pl-10 md:pl-10 lg:text-3xl md:text-2xl text-3xl font-semibold"
          >
            in your city
          </p>
        </div>
        <div className="flex flex-col flex-shrink items-start pt-5 mt-5">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600  lg:pl-10 md:pl-10 pl-5"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ab
            architecto mollitia doloribus earum rerum aspernatur? Voluptatem est
            laboriosam aut. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Nostrum, nemo rerum! Doloremque tempora, minima reprehenderit
            fuga enim ex obcaecati at!
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center pt-5 mt-5 justify-center">
        <div className="items-center justify-center">
          <img
            data-aos="zoom-in"
            data-aos-delay="500"
            src={carwash}
            alt=""
            className="h-100 mb-10"
          />
        </div>
      </div>

      <div className="bg-slate-100 text-black">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div>
              <img
                data-aos="zoom-in"
                data-aos-delay="700"
                src={carside}
                alt=""
                className="h-40 md:h-60 lg:h-80"
              />
            </div>
            <div>
              <div className="">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="lg:pl-10 md:pl-10 mt-10 lg:text-3xl text-red-800 md:text-2xl text-3xl font-bold"
                >
                  About us
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="text-gray-600 mt-4 lg:pl-10 md:pl-10 pl-1"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, magnam! Tenetur odio quo et maxime?
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="text-gray-600 mt-2 lg:pl-10 md:pl-10 pl-1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 text-black py-14">
        <div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div className="bg-dark/50 p-4 grid place-items-center">
              <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold">2+</h1>
                <p className="text-xl font-semibold">Years Experience</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="text-center p-6 bg-dark">
                <h1 className="text-3xl font-bold">60+</h1>
                <p>Happy Clients</p>
              </div>
              <div className="text-center p-6 bg-dark">
                <h1 className="text-3xl font-bold">120+</h1>
                <p>Car rents</p>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="text-center p-6 bg-dark">
                <h1 className="text-3xl font-bold">140+</h1>
                <p>Happy Clients</p>
              </div>
              <div className="text-center p-6 bg-dark">
                <h1 className="text-3xl font-bold">230+</h1>
                <p>Car wash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
