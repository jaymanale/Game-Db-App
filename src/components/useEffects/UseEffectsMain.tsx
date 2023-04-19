import React, { useState } from "react";
import UseEffectExplain from "./UseEffectExplain";
import ProductsLists from "./ProductsLists";

const UseEffectsMain = () => {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">CLothing</option>
        <option value="Household">Household</option>
      </select>
      {category}
      <ProductsLists category={category} />
    </>
  );
};

export default UseEffectsMain;
