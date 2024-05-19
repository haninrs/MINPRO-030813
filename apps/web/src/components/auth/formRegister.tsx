'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import Link from 'next/link';
import { BsEyeFill } from 'react-icons/bs';
import { IoIosGift } from 'react-icons/io';
import { RiEyeCloseFill } from 'react-icons/ri';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, "Username can't be longer than 20 characters"),
  email: yup
    .string()
    .email('Please Enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPw: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  referral: yup
    .string()
    .optional()
    .min(6, 'Referral code must be at least 6 character'),
});

export default function FormRegister() {
  const [loading, setLoading] = useState('hidden');

  const onRegister = async (data: any) => {
    try {
      setLoading('absolute');

      const res = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert('Submit form success please check your email for verification');
      }
      if (res.status == 400) {
        if (data.error == 'Email already exists') {
          alert('Email already exists , Please use another email or log in');
        }
        if (data.error == 'Username already exists') {
          alert(
            'Username already exists , Please use another username or log in',
          );
        }
      }
    } catch (error: any) {
      // alert(error.message);
      console.log(error);
      setLoading('hidden');
    }
  };

  const [show, setShow] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-7">
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPw: '',
          referral: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={async (values, action) => {
          console.log(values);
          onRegister(values);
          action.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <div className="grid place-items-center max-h-full sm:h-screen">
                <div className="shadow-xl p-5 rounded-lg border-t-4 border-[#000066] bg-white">
                  <h1 className="p-10 text-black text-xl font-bold">Sign Up</h1>
                  {/* username */}
                  <label className="px-3 input flex items-center gap-2 bg-white mt-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="gray"
                      className="w-4 h-4 "
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <Field
                      name="username"
                      type="text"
                      placeholder="Username"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </label>
                  <ErrorMessage
                    name="username"
                    component={'div'}
                    className="text-sm px-10 pt-1 text-red-700"
                  />

                  {/* email */}
                  <label className="px-3 input flex items-center gap-2 bg-white mt-2">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
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
                    className="text-sm px-10 pt-1 text-red-700"
                  />

                  {/* password */}
                  <label className="px-3 input flex items-center gap-2 bg-white mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="gray"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Field
                      name="password"
                      type={show === false ? 'password' : 'text'}
                      placeholder="Password"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      className="text-gray-900 text-sm"
                      onClick={() => setShow(!show)}
                    >
                      {show === false ? (
                        <RiEyeCloseFill size={16} />
                      ) : (
                        <BsEyeFill size={18} />
                      )}
                    </button>
                  </label>
                  <ErrorMessage
                    name="password"
                    component={'div'}
                    className="text-sm px-10 pt-1 text-red-700"
                  />

                  {/* confirm pw */}
                  <label className="px-3 input flex items-center gap-2 bg-white mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="gray"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Field
                      name="confirmPw"
                      type={showConfirmPassword === false ? 'password' : 'text'}
                      placeholder="Confirm password"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      className="text-gray-900 text-sm"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword === false ? (
                        <RiEyeCloseFill size={16} />
                      ) : (
                        <BsEyeFill size={18} />
                      )}
                    </button>
                  </label>
                  <ErrorMessage
                    name="confirmPw"
                    component="div"
                    className="text-sm px-10 pt-1 text-red-700"
                  />

                  {/* referal */}
                  <label className="px-3 input flex items-center gap-2 bg-white p-4 mt-2">
                    <IoIosGift fill="gray" />
                    <Field
                      name="referral"
                      type="text"
                      placeholder="Referral Code (Optional)"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </label>
                  <ErrorMessage
                    name="referral"
                    component="div"
                    className="text-sm px-10 pt-1 text-red-700"
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-[#FFCC00] text-center w-2/4 text-white font-bold cursor-pointer py-2 mt-10 rounded-lg"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="flex justify-center pt-11 text-sm">
                    <p>
                      Already have an account?{' '}
                      <Link
                        className="text-blue-600 underline font-semibold"
                        href={'/login'}
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
