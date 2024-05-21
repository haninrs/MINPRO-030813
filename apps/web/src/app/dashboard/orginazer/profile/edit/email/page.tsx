'use client';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { EditProfileOrginazer } from '@/components/EditProfile/editProfileOrginazer';

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
          // console.log(values);
          //  onReset(values)
          action.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <EditProfileOrginazer
                title="Change Email"
                description="Enter your new email address"
                nameField="email"
                placeholderField="New Email"
                buttonText="Save"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
