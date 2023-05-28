import * as yup from "yup";

export const validateForm = yup.object({
  Fname: yup.string().required("Please enter your first name"),
  Lname: yup.string().required("Please enter your last name"),
  email: yup.string().email().required("Please enter your email address"),
  project: yup
    .string()
    .notOneOf(["1"], "Please select how do you want to work with us")
    .required(),
  work: yup
    .string()
    .notOneOf(["1"], "Please select what service do you require.")
    .required(),
  phone_number: yup.string().matches(/^\d{10}$/, "Please a valid phone number"),
  address: yup.string(),
  message: yup.string(),
});
