import React, { useEffect, useState } from "react";

const ProductsLists = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching products...");
  }, []); // If there is no dependency then to render only once we pass empty array []
  return <div>ProductsLists</div>;
};

export default ProductsLists;
