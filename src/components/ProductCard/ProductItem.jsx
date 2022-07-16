import React from "react";

const ProductItem = (props) => {
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-red-200 bg-opacity-50 shadow-xl hover:rounded-2xl">
      <img
        src={props.prod.img}
        alt={props.prod.name}
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div>
      </div>
    </div>
  );
};

export default ProductItem;
