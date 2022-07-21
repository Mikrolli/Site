import React from "react";
import MyInput from "../../UI/input/MyInput";
import PriceItem from "./PriceItem";

const PriceList = ({ prices }) => {
  return (
    <div className="grid grid-cols-1  gap-6">
      {prices.map((pric) => (
        <PriceItem pric={pric} key={pric.id} />
      ))}
    </div>
  );
};

export default PriceList;
