import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const FormWithReactHookForm = () => {
  const { register, handleSubmit } = useForm();

  const handleOnFormSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleOnFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
};

export default FormWithReactHookForm;
