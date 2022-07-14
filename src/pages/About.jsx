import React from "react";
import Men from "../assets/aboutImg/men.jpg";
import Men1 from "../assets/aboutImg/men1.jpg";
import Men2 from "../assets/aboutImg/men2.jpg";
import Present from "../assets/aboutImg/present.jpg";
import Table from "../assets/aboutImg/table.jpg";

const About = () => {
  return (
    <div className="max-w-[1240px] w-full py-12 px-4 mx-auto text-center">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3 text-gray-600">
        О компании
      </h1>
      <p className="lg:mx-auto lg:w-7/12 py-4 text-gray-400 ">Мы гарантируем качество выполненных работ, минимальные сроки, реальные цены и высокий уровень сервиса.</p>
      <div className="text-left">
        <p className="p-2">
          АСЦ ЯрСервис октрыл свои двери в марте 2014 года, и за многолетнюю
          работу в сфере сервисных услуг,компания приобрела широкую известность
          и завоевала прочную репутацию среди клиентов. СЦ выполняет гарантийный
          и постгарантийный ремонт бытовой техникик в Ярославле и области.
        </p>
        <p className="p-2">
          Мы осуществляем ремонт любого уровня сложности КБт МБТ,климатической
          ,аудио-видео техники. ЯрСервис имеет доступ к заказу зч многих
          известных брендов, многие комплектующие есть в наличии, а это
          значительно сокращает время ремонта. Наши специалисты вернут к жизни
          вашу технику в мастерской или прямо на дому. Мы отвечаем за свою
          работу , поэтому предоставляем гарантию на выполненные работы 3 мес. .
        </p>
        <p className="p-2">
          Вы всегда можете получить квалифицированную консультацию сотрудников,
          которые порекомендуют лучший вариант ухода за техникой. в ЯрСервис
          демократичные цены на услуги. Персонал от рук-ля до мастера
          профессионально выполняет свою работу и несет отвественность за
          качество услуг. Мы любим технику и делаем все, чтоб она работала так,
          как надо ВАМ.
        </p>
      </div>
      <div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Men}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={Men1} alt="/" />
        <img className="w-full h-full object-cover" src={Men2} alt="/" />
        <img className="w-full h-full object-cover" src={Table} alt="/" />
        <img className="w-full h-full object-cover" src={Present} alt="/" />
      </div>
    </div>
  );
};

export default About;
