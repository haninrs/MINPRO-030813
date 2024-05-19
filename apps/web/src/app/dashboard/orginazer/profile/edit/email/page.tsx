'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import * as yup from 'yup';

const ResetPwSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter a valid email address')
    .required('Email is required'),
});

export default function ChangeEmail() {
  return (
    <div className=" p-7 bg-white">
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetPwSchema}
        onSubmit={(values, action) => {
          console.log(values);
          //  onReset(values)
          action.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <div className="grid place-items-center min-h-screen">
                <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                  <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <h1 className="mt-5 mb-10 text-pretty text-[#000066] text-center text-xl font-bold">
                        Change Email
                      </h1>
                      <p className="text-pretty text-center text-gray-600">
                        We will email you a reset password link
                      </p>
                      <label className="mx-3 input flex items-center justify-center gap-2 bg-white mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="gray"
                          className="w-4 h-4"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <Field
                          name="email"
                          type="text"
                          placeholder="Email"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </label>
                      <ErrorMessage
                        name="email"
                        component={'div'}
                        className="text-sm ms-14 w-full mt-1 text-red-700"
                      />
                      <div className="flex justify-center">
                        <button
                          className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                        transition-ease hover:scale-105 duration-300
                        "
                        >
                          Email me
                        </button>
                      </div>
                      <p className="mx-10 mt-7 text-sm">
                        Back to{' '}
                        <Link
                          className="underline text-blue-600 font-semibold"
                          href={'/login'}
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
