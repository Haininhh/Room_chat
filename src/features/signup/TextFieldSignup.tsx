import { ErrorMessage, useField } from "formik";
import * as Yup from "yup";

interface Props {
  placeholder: string;
  name: string;
  type: string;
}

export const validateSignup = Yup.object({
  fullname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

export const validateLogin = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
});

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
      <ErrorMessage
        component="div"
        name={field.name}
        className="sign__up-error text-center color-red"
      />
    </>
  );
};
