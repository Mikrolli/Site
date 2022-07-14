import React from 'react';
import NewsCardList from '../mocks/NewsCardList';

const News = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-12 px-4'>
      <section className='p-4 lg:p-8'>
      <div className='container mx-auto space-y-12'>
        <div className='flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row'>
          {NewsCardList.map((ncl) => (
            <div key={ncl.id}>
              <img src={ncl.img} alt={ncl.name} className='h-80 dark:bg-gray-500 aspect-video' />
              <div className='flex flex-col justify-center flex-1 p-6 dark:bg-gray-900'>
                <span className='text-xs uppercase dark:text-gray-400'>{ncl.head}</span>
                <h3 className='text-3xl font-bold'>{ncl.name}</h3>
                <p className='my-6 dark:text-gray-400'>{ncl.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  )
}

export default News