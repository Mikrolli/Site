import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaViber, FaWhatsapp, FaVk } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-violet-700">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#FFFFFF]">
            <a href="#">ЯрСервис</a>
          </h1>
          <p className="py-4">
            Мы гарантируем качество выполненных работ, минимальные сроки,
            реальные цены и высокий уровень сервиса.
          </p>
          <div className="flex justify-between my-6">
            <FaInstagram size={30} />
            <FaVk size={30} />
            <FaViber size={30} />
            <FaWhatsapp size={30} />
            <TbBrandTelegram size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-wrap gap-3 justify-between ">
          <div>
            <h6 className="font-medium text-gary-400 border-b border-gray-100 pb-3">
              Меню
            </h6>
            <ul className="flex flex-col">
              <NavLink to="/" className="py-2 text-sm">
                Главная
              </NavLink>
              <NavLink to="/about" className="py-2 text-sm">
                О компании
              </NavLink>
              <NavLink to="/certificates" className="py-2 text-sm">
                Сертификаты
              </NavLink>
              <NavLink to="/services" className="py-2 text-sm">
                Услуги
              </NavLink>
              <NavLink to="/price" className="py-2 text-sm">
                Цены
              </NavLink>
              <a to="/contact" className="py-2 text-sm">
                Контакты
              </a>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gary-400 border-b border-gray-100 pb-3">
              Полезная информация
            </h6>
            <ul>
              <li className="py-2 text-sm">Политика</li>
              <NavLink to='/news' className="py-2 text-sm">Новости</NavLink>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gary-400 border-b border-gray-100 pb-3">
              Контакты
            </h6>
            <ul className="">
              <li className="py-2 text-sm flex items-center gap-2">
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <a href="tel:+79109739646">283-300</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <a href="">remont@yar-servise.ru</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                <a href="">manager-zip@yar-servise.ru</a>
              </li>
              <li className="py-2 text-sm flex items-center gap-2">
                г. Ярославль, Ленинградский пр-т, 52в
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
