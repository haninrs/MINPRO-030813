'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { EditProfileOrginazer } from '@/components/EditProfile/editProfileOrginazer';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

const ResetPwSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  newPass: yup
    .string()
    .required('New password is required')
    .min(6, 'New password must be at least 6 characters'),
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
                  <Link
                    href={'/dashboard/orginazer/profile'}
                    className="text-black  flex gap-1 items-center mb-3"
                  >
                    <IoIosArrowBack className="size-7 lg:size-16" />
                    <span className="text-gray-600 text-lg font-semibold lg:text-xl">
                      Back to profile
                    </span>
                  </Link>
                  <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <h1 className="mt-5 mb-10 text-pretty text-[#000066] text-center text-xl font-bold">
                        Change Password
                      </h1>
                      <p className="text-pretty text-center text-gray-600">
                        Your new password must be different from previously used
                        passwords
                      </p>

                      {/* old pw */}
                      <div>
                        <label className="input flex items-center justify-center gap-2 bg-white mt-2">
                          <Field
                            name={'password'}
                            type="text"
                            placeholder={'Previous Password'}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </label>
                        <ErrorMessage
                          name={'password'}
                          component={'div'}
                          className="text-sm w-full mt-1 text-red-700"
                        />
                      </div>

                      {/* new pw */}
                      <div>
                        <label className="input flex items-center justify-center gap-2 bg-white mt-2">
                          <Field
                            name={'newPass'}
                            type="text"
                            placeholder={'New Password'}
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </label>
                        <ErrorMessage
                          name={'newPass'}
                          component={'div'}
                          className="text-sm  w-full mt-1 text-red-700"
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                        transition-ease hover:scale-105 duration-300
                        "
                        >
                          Change Password
                        </button>
                      </div>
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
