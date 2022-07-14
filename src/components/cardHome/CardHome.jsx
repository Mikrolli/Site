import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import HomeCardList from '../../mocks/HomeCardList';
import MyButton from '../../UI/button/MyButton';

const CardHome = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {HomeCardList.map((card) => (
          <div
            key={card.id}
            className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
          >
            <GiAutoRepair className="w-20 h-20 mx-auto mt-[-3rem] bg-transparent" />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">
              Цены от {card.price} ₽
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">{card.repair}</p>
              <p className="py-2 border-b mx-8">{card.installation}</p>
              <p className="py-2 border-b mx-8">{card.diagnostics}</p>
            </div>
            <MyButton className='bg-[#FF0000] w-[200px] rounded-md font-medium my-6 animate-bounce mx-auto py-3'>
              Подробнее
            </MyButton>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardHome