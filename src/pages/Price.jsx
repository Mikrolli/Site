import React, { useState } from "react";
import InputForm from "../UI/inputForm/InputForm";
import Products from "../mocks/Products";
import ProductList from '../components/ProductCard/ProductList';

const Price = () => {
  const [product, setProduct] = useState(Products);

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-12">
      <div>
        <InputForm value="Поиск..." placeValue="Поиск..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">dfgfdgfdgdf</div>
        <div>
          <ProductList product={product} />
        </div>
      </div>
    </div>
  );
};

export default Price;
