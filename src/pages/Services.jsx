import React, { useState } from "react";
import ServicesList from "../components/ServicesCard/ServicesList";
import ServicesCardList from "../mocks/ServicesCardList";

const Services = () => {
  const [service, setService] = useState(ServicesCardList);

  return (
    <div className="max-w-[1240px] mx-auto w-full px-4 py-12">
      <div className="container m-auto px-6 text-gray-600 md:px-12 lg:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className='text-2xl text-gray-600 font-bold md:text-4xl'>Наши Услуги</h2>
        </div>
      </div>
      <ServicesList service={service} />
    </div>
  );
};

export default Services;
