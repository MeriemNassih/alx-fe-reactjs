import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field
            type="text"
            name="username"
            id="username"
          />
          <ErrorMessage name="username" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            name="email"
            id="email"
          />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            name="password"
            id="password"
          />
          <ErrorMessage name="password" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Formik>
  );
}

export default formikForm;
