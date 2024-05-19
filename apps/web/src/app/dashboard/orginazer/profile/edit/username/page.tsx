'use client';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { EditProfileOrginazer } from '@/components/EditProfile/editProfileOrginazer';

const ResetPwSchema = yup.object().shape({
  username: yup.string().required('New username is required'),
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
              <EditProfileOrginazer
                title="Change Username"
                description="Enter your new username"
                nameField="username"
                placeholderField="New Username"
                buttonText="Change Username"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
