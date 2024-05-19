'use client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { BsEyeFill } from 'react-icons/bs';
import { RiEyeCloseFill } from 'react-icons/ri'; // Changed TbEyeClosed to RiEyeCloseFill for the eye closed icon
import AlertComponent from '@/components/AlertComp';
import { redirect } from 'next/navigation';
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
        redirect('/login');
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [showAlert]);

  return (
    <div className=" bg-white">
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
            <div className="min-h-screen bg-white grid place-content-center">
              <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 border-t-4 border-[#000066] rounded-lg p-8 md:p-12 mb-8 shadow-xl">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-2xl text-center text-[#000066] p-3 pb-7 text-pretty font-bold">
                      Reset your password
                    </h1>
                    <p className="text-pretty text-center mb-5 text-gray-600">
                      The password must be at least 6 characters
                    </p>
                    <div>
                      {/* pw */}
                      <label className="input flex items-center gap-2 bg-white mt-2">
                        <Field
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="New password"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#000066] sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          className="text-gray-900"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <RiEyeCloseFill /> : <BsEyeFill />}
                        </button>
                      </label>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-sm ps-5 mt-1 text-red-700"
                      />

                      {/* confirm pw */}
                      <label className="input flex items-center gap-2 bg-white mt-2">
                        <Field
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm new password"
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#000066] sm:text-sm sm:leading-6"
                        />
                        <button
                          type="button"
                          className="text-gray-900"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <RiEyeCloseFill />
                          ) : (
                            <BsEyeFill />
                          )}
                        </button>
                      </label>
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-sm ps-5 mt-1 text-red-700"
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
                        className="bg-[#FFCC00] text-white text-lg font-bold text-center py-2 px-4 h-30 rounded-md hover:bg-[#c49e04]  hover:text-white
                        transition-ease hover:scale-105 duration-300
                        "
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
