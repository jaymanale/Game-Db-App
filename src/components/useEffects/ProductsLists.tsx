import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductsLists = ({ category }: Props) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching products in " + category);
  }, [category]); // If there is no dependency then to render only once we pass empty array []
  return <div>ProductsLists</div>;
};

export default ProductsLists;
