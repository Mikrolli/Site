import React from "react";
import MyButton from "../../UI/button/MyButton";
import { NavLink } from "react-router-dom";

const ServicesItem = (props) => {
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-blue-100 bg-opacity-50 shadow-xl hover:rounded-2xl">
      <img
        src={props.serv.img}
        alt={props.serv.name}
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div className="sm:w-7/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-gray-400">
              {props.serv.title}
            </h4>
            <p className="text-gray-500">{props.serv.name}</p>
          </div>
          <MyButton className="block w-max bg-violet-300 px-4 py-2 rounded-lg text-gray-700 ">
            Подробнее
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;

