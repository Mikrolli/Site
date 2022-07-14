import React from "react";
import InputForm from "../inputForm/InputForm";

const SendMaster = () => {
  return (
    <div className="flex items-start flex-col py-14">
      <div className="flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-start">
        <InputForm value="Ф.И.О" placeValue="Ф.И.О" />
        <InputForm value="Телефон" placeValue="+7(800) - 555 - 35 - 35" />
        <InputForm value="Сообщение" placeValue="Введите ваше сообщение" />
        <div>
          <button className="bg-white px-6 py-2 rounded-md border-2 border-red-500 uppercase">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMaster;
