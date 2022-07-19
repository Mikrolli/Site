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
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <a
              href="tel:283300"
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
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <a
              href="tel:284400"
              className="-mr-1 flex p-2 rounded-md gap-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="text-white hidden md:inline">284-400</span>
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
                График работы:<br/> пн - пт: с 09:00 до 19:00 <br/> суббота: с 10:00 до 15:00 <br/> воскресенье - выходной
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
