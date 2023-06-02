"use client";
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { validateContactForm } from "@/components/validateContactForm";

const Contact = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    message: "",
  };

  const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: validateContactForm,
      onSubmit: (value, action) => {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", value)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        action.resetForm();
      },
    });
  return (
    <>
      <section className="container mx-auto p-5 md:pr-0 flex max-md:flex-col gap-8 lg:py-16">
        <div className="w-full">
          <h1 className="text-3xl lg:text-5xl font-bold">
            {" "}
            Let's <span className="text-primary">Work</span> together{" "}
          </h1>
          <p className="max-w-[580px] my-4">
            Please tell us a bit about you, your project, and how best to reach
            you. We’ll get right back to you.
          </p>
        </div>

        <div className="w-full">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex gap-3 md:gap-6 xl:gap-16 w-full max-xl:flex-col">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="first-name">
                  First name <span className="text-[red]">*</span>{" "}
                </label>
                <input
                  className="border border-[#ced4da] px-5 py-2 focus:outline-none !w-full rounded-md"
                  id="first-name"
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.first_name && errors.first_name ? (
                  <p className="text-[red]"> {errors.first_name}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="last-name">
                  Last name <span className="text-[red]">*</span>{" "}
                </label>
                <input
                  id="last-name"
                  className="border border-[#ced4da]  px-5 py-2 focus:outline-none w-full rounded-md"
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.last_name && errors.last_name ? (
                  <p className="text-[red]"> {errors.last_name}</p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">
                Your Email Address <span className="text-[red]">*</span>
              </label>
              <input
                className="border border-[#ced4da] px-5 py-2 focus:outline-none !w-full rounded-md"
                id="email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <p className="text-[red]"> {errors.email}</p>
              ) : null}
            </div>

            <div className="flex gap-3 md:gap-6 xl:gap-16 w-full max-xl:flex-col">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  className="border border-[#ced4da] px-5 py-2 focus:outline-none !w-full rounded-md"
                  id="phone-number"
                  type="text"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="address">Address </label>
                <input
                  id="address"
                  className="border border-[#ced4da]  px-5 py-2 focus:outline-none w-full rounded-md"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message">
                Tell us something about your project
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="border focus:outline-none p-3"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="outline outline-1 font-semibold   outline-primary hover:bg-primary transition-colors  duration-200 ease-linear px-4 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
