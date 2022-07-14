import React from "react";
import Typed from "react-typed";

const HomeTitle = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Ремонт бытовой техники
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Всех видов и марок
          </p>
          <Typed
            className="text-red-500 uppercase md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Bosch", "Candy", "LG", "Samsung", "Sony", "Ariston"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Мы предлагаем весь спектр услуг по диагностике, ремонту и обслуживанию
          мелкой и крупной бытовой техники.
        </p>
      </div>
    </div>
  );
};

export default HomeTitle;
