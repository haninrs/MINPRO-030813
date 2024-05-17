'use client';
import { useAppDispatch } from '@/lib/feature/hooks';
import { setUser } from '@/lib/feature/user/userSlice';
import { loginUserc } from '@/lib/userCostumer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import * as yup from 'yup';
import { BsEyeFill } from 'react-icons/bs';
import { TbEyeClosed } from 'react-icons/tb';

const LoginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const FormLogin = () => {
  const handleLogin = async (values: any, action: any) => {
    try {
      await loginUserc(values);
    } catch (error) {
      console.log(error);
      alert(error);
    }
    action.resetForm();
  };

  // const search = useSearchParams();
  // const dispatch = useAppDispatch();
  // const redirect = search.get('redirect') || '/';

  // const onLogin = async (data: any) => {
  //   try {
  //     const res = await loginUserc(data);
  //     dispatch(setUser(res.user));
  //     createToken(res.token, redirect);
  //   } catch (error) {
  //     console.log(error);
  //     alert(<AlertComponent message={'Error'}></AlertComponent>);
  //   }
  // };

  const [show, setShow] = useState(false);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      // onSubmit={(values, action) => {
      //   console.log(values);
      //   onLogin(values);
      //   action.resetForm();
      // }}
      onSubmit={handleLogin}
    >
      {() => {
        return (
          <Form>
            <div className="grid place-items-center max-h-full sm:h-screen">
              <div className="shadow-xl p-5 rounded-lg border-t-4 border-[#000066] bg-white">
                <h1 className="m-10 text-black text-xl font-bold">Log in</h1>
                {/* username */}
                <label className=" mx-3 input flex items-center gap-2 bg-white  ">
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
                  className="text-sm ms-14 mt-1 text-red-700"
                />

                {/* password */}
                <label className="mx-3 input flex items-center gap-2 bg-white mt-2">
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
                    className="block  w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    className="text-gray-900 text-sm"
                    onClick={() => setShow(!show)}
                  >
                    {show === false ? <TbEyeClosed /> : <BsEyeFill />}
                  </button>
                </label>
                <ErrorMessage
                  name="password"
                  component={'div'}
                  className="text-sm ms-14 mt-1 text-red-700"
                />

                <p className="ms-14 mt-5">
                  <Link
                    className="text-blue-600 underline text-sm font-semibold"
                    href={'/forgot-password'}
                  >
                    Forgot password?
                  </Link>
                </p>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#FFCC00] mx-10 w-2/4 text-white font-bold cursor-pointer py-2  mt-10 rounded-lg"
                  >
                    Log in
                  </button>
                </div>
                <p className="ms-14 mt-11 text-sm">
                  Don&apos;t have an account?{' '}
                  <Link
                    className="text-blue-600 font-semibold underline"
                    href={'/signup'}
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormLogin;
