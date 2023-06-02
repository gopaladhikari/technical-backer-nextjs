import * as yup from "yup";

export const validateContactForm = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  phone_number: yup.string().matches(/^\d{10}$/, "Please a valid phone number"),
  address: yup.string(),
  message: yup.string(),
});
