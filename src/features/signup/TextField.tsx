import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  placeholder: string;
  name: string;
  type: string;
}

export const TextField = ({ placeholder, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        placeholder={placeholder}
        className={`form-control mt-8 shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </>
  );
};
