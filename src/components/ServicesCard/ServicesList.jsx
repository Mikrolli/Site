import React from "react";
import ServicesItem from "./ServicesItem";

const ServicesList = ({ service }) => {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {service.map((serv) => (
        <ServicesItem serv={serv} key={serv.id} />
      ))}
    </div>
  );
};

export default ServicesList;
