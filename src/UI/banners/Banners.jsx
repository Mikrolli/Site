import React from "react";
import { TbSpeakerphone } from "react-icons/tb";
import { BsTelephoneOutbound, BsPinMap } from "react-icons/bs";

const Banners = () => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-[1240px] mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <div className="flex p-2 rounded-lg bg-indigo-800">
              <TbSpeakerphone className="h-6 w-6 text-white" />
            </div>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Акции</span>
              <span className="hidden md:inline">
                Каждое 5-е число месяца скидка на запчасти 5 %!
              </span>
            </p>
          </div>
          {/* <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Каталог
            </a>
          </div> */}
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <a
              href="tel:+79014860602"
              className="-mr-1 flex p-2 rounded-md gap-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="text-white hidden md:inline">283-300</span>
              <BsTelephoneOutbound className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <div className="flex p-2 rounded-lg bg-indigo-800">
              <BsPinMap className="h-6 w-6 text-white" />
            </div>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Ленинградский пр-т, 52в</span>
              <span className="hidden md:inline">
                г. Ярославль, Ленинградский пр-т, 52в
              </span>
            </p>
          </div>
          {/* <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Каталог
            </a>
          </div> */}
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <a
              href="tel:+79014860602"
              className="-mr-1 flex p-2 rounded-md gap-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="text-white hidden md:inline">284-400</span>
              <BsTelephoneOutbound className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
