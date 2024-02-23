import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHtNdfh3zaO7h10f8LZJYFKVx_Fz87Hj36w&usqp=CAU"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-gray-500 font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 md:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 md:p-0`
                    }
                  >
                    Service
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/galary"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 md:p-0`
                    }
                  >
                    CarRepair
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      ` py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 md:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 font-medium">
                <li className="">
                  <a
                    href="https://github.com/AtaAman"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 mt-5 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-orange-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:text-center sm:justify-center">
          <span className="text-sm text-gray-500 text-center">
            © 2023
            <a href="" className="hover:underline">
              AmanAta
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
