import React from 'react';
import CardHome from '../components/cardHome/CardHome';
import HomeForm from '../components/homeForm/HomeForm';
import HomeTitle from '../components/homeTitle/HomeTitle';

const Home = () => {
  return (
    <div>
      <HomeTitle /> 
      <HomeForm />
      <CardHome />
    </div>
  )
}

export default Home