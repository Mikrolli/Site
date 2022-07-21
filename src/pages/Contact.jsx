import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import MyInput from "../UI/input/MyInput";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4">
      <div className="lg:flex">
        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
          <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
              Написать
            </h1>
            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
              Если у вас остались вопросы или предложения, вы можете нам
              написать.
            </p>
            <div className="flex pb-4 items-center">
              <AiOutlinePhone size={20} className="text-white" />
              <a href="tel:284400" className="pl-4 text-white text-base">
                284-400
              </a>
            </div>
            <div className="flex pb-4 items-center">
              <AiOutlinePhone size={20} className="text-white" />
              <a href="tel:283300" className="pl-4 text-white text-base">
                283-300
              </a>
            </div>
            <div className="flex pb-4 items-center">
              <AiOutlineMail size={20} className="text-white" />
              <a
                href="mailto:remont@yar-servise.ru"
                className="pl-4 text-white text-base"
              >
                remont@yar-servise.ru
              </a>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={20} className="text-white" />
              <a
                href="mailto:manager-zip@yar-servise.ru"
                className="pl-4 text-white text-base"
              >
                manager-zip@yar-servise.ru
              </a>
            </div>
            <p className="text-lg text-white pt-10 tracking-wide">
              г. Ярославль, Ленинградский пр-т, 52в
            </p>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
          <form
            id="contact"
            className="bg-white py-4 px-8 rounded-tr rounded-br"
          >
            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
              Ваши данные
            </h1>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="full_name"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Ф.И.О
                  </label>
                  <MyInput placeholder="Иванов Иван Иванович" />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap">
              <div className="w-2/4 max-w-xs">
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Телефон
                  </label>
                  <MyInput placeholder="+7(800) 555-35-35" />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  className="text-sm font-semibold text-gray-800 mb-2"
                  htmlFor="message"
                >
                  Сообщение
                </label>
                <textarea
                  placeholder='Ваше сообщение'
                  name="message"
                  className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                  rows={8}
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
