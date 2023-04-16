import React from "react";
import { categories } from "../../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select my-4"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All category</option>
      {categories &&
        categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
    </select>
  );
};

export default ExpenseFilter;
