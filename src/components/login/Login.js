import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory, useLocation } from "react-router-dom"
import { useAuth } from "../../AuthProvider"
function Login() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        auth.signin(values.email, values.password, () => {
          history.replace(from);
        })
      }}
      >
       <Form>
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />

         <label htmlFor="password">Password</label>
         <Field name="password" type="password" />
         <ErrorMessage name="password" />

         <button type="submit">Submit</button>
       </Form>
     </Formik>
  );
};

export default Login;
