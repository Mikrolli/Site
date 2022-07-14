import React from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import Links from "../../mocks/Links";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Logo from "../../assets/logo.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-violet-600">
      {({ open }) => (
        <>
          <div className="max-w-[1240px] mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open</span>
                  {open ? (
                    <AiOutlineClose className="block h-8 w-8" />
                  ) : (
                    <AiOutlineMenuUnfold className="block h-8 w-8" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex-shrink-0 flex items-center">
                  <img
                    src={Logo}
                    alt="Логотип компании ЯрСервис"
                    className="block lg:hidden h-14 w-auto"
                  />
                  <img
                    src={Logo}
                    alt="Логотип компании ЯрСервис"
                    className="hidden lg:block h-12 w-auto"
                  /> 
                </div> */}
                <div className="hidden sm:block ">
                  <div className="flex space-x-4">
                    {Links.map((link) => (
                      <NavLink
                        key={link.id}
                        to={link.href}
                        className={classNames(
                          link.current
                            ? " text-white bg-red-700"
                            : "text-gray-300 hover:bg-red-500 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu open */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {Links.map((link) => (
                <Disclosure.Button
                  key={link.id}
                  as="a"
                  to={link.href}
                  className={classNames(
                    link.current
                      ? "bg-red-700 text-white"
                      : "text-gray-300 hover:bg-red-500 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {link.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
