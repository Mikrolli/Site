import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ product }) => {
  return (
    <div>
      {product.map((prod) => (
        <ProductItem prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ProductList;
