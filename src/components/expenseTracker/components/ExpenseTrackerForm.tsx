import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { categories } from "../../../App";
interface FormData {
  description: string;
  amount: number;
}

const ExpenseTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnFormSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleOnFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="description"
          type="text"
          placeholder="apple"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true })}
          id="amount"
          type="number"
          placeholder="50"
          className="form-control"
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">The amount field is required.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="category" id="" className="form-select">
          <option value="">All category</option>
          {categories &&
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
