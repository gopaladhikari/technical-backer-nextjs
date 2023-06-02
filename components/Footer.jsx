"use client";
import { companyLinks, serviceLinks, connectWithUsLinks } from "@/data";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const Footer = () => {
  const validateFooter = yup.object({
    email: yup
      .string()
      .email("Please enter the valid email")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
  };

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: validateFooter,
      onSubmit: (value, action) => {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", value)
          .then(({ data }) => console.log(data))
          .catch((err) => console.log(err));
        action.resetForm();
      },
    });

  return (
    <footer className="bg-secondary text-white p-5">
      <div className="container mx-auto">
        <div className="flex justify-between max-md:flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 basis-1/2">
            <h2 className="text-3xl">Join our newsletter</h2>
            <p>
              Sign up to stay updated with the latest insights, news, and more.
            </p>
          </div>
          <div className="basis-1/2">
            <form onSubmit={handleSubmit} className="">
              <div className="flex w-full gap-4 items-center">
                <input
                  name="email"
                  className="px-6 w-full py-2 focus:outline-none text-black rounded-md"
                  placeholder="Your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button
                  type="submit"
                  className=" text-black bg-primary px-6 py-2 rounded-[30px] "
                >
                  Subscribe
                </button>
              </div>
              {errors.email && touched.email ? (
                <p className="text-[red] pt-2 ms-1"> {errors.email} </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <div className="flex max-md:gap-12 justify-between flex-wrap whitespace-nowrap">
          <ul className="flex basis-[100%] md:basis-0  max-md:items-center flex-col gap-3">
            <h2 className="font-semibold">Company</h2>
            {companyLinks.map((item) => {
              const { id, text } = item;
              return (
                <li
                  key={id}
                  className="text-tertiary hover:text-white transition-all duration-300"
                >
                  {text}
                </li>
              );
            })}
          </ul>
          <ul className="flex basis-[100%] md:basis-0 max-md:items-center flex-col gap-3">
            <h2 className="font-semibold">Services</h2>{" "}
            {serviceLinks.map((item) => {
              const { id, text } = item;
              return (
                <li
                  key={id}
                  className="text-tertiary hover:text-white transition-all duration-300"
                >
                  {text}
                </li>
              );
            })}
          </ul>
          <ul className="flex basis-[100%] md:basis-0 max-md:items-center flex-col gap-3">
            <h2 className="text-start font-semibold">Connect With Us</h2>

            {connectWithUsLinks.map((item) => {
              const { id, text } = item;
              return (
                <li
                  key={id}
                  className="text-tertiary hover:text-white transition-all duration-300"
                >
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-center mt-6">
          &copy; Copyright 2023 Technical Backers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
