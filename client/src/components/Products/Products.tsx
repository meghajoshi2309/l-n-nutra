import React, { useRef } from "react";
import ProductList from "../Product/ProductList/ProductList";

const Products = () => {
  const productRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={productRef}>
      <ProductList />
    </div>
  );
};

export default Products;
