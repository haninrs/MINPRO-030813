'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { BsEyeFill } from 'react-icons/bs';
import { RiEyeCloseFill } from 'react-icons/ri'; // Changed TbEyeClosed to RiEyeCloseFill for the eye closed icon
import AlertComponent from '@/components/AlertComp';
// import { useRouter } from 'next/router';

const ResetPwSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'New password must be at least 6 characters')
    .required('New password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default function ForgotPass() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // const router = useRouter();

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
        // router.push('/login');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [showAlert]);

  return (
    <div className="bg-white">
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        validationSchema={ResetPwSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form>
            <div className="grid place-items-center h-screen px-7 sm:px-0">
              <div className="shadow-xl p-5 rounded-lg border-t-4 border-[#000066] bg-white">
                <h1 className="p-10 text-black text-xl font-bold">
                  Reset your password
                </h1>
                <p className="text-pretty mx-10 mb-5 text-black">
                  The password must be at least 6 characters
                </p>
                <div className="px-7">
                  {/* pw */}
                  <label className="input flex items-center gap-2 bg-white mt-2">
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="New password"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="text-gray-900 text-sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <RiEyeCloseFill /> : <BsEyeFill />}
                    </button>
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm px-7 mt-1 text-red-700"
                  />

                  {/* confirm pw */}
                  <label className="input flex items-center gap-2 bg-white mt-2">
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm new password"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="text-gray-900 text-sm"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <RiEyeCloseFill /> : <BsEyeFill />}
                    </button>
                  </label>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-sm px-7 mt-1 text-red-700"
                  />
                </div>

                {/* button reset */}
                <div className="flex justify-center">
                  {showAlert && (
                    <AlertComponent
                      message="Your password has been reset! 
                    you will be redirected to the login page"
                    />
                  )}
                  <button
                    type="submit"
                    onClick={handleButtonClick}
                    className="bg-[#FFCC00] mx-10 w-2/4 text-white font-bold cursor-pointer py-2 mt-10 rounded-lg"
                  >
                    Reset
                  </button>
                </div>
                
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
