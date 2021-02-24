import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory, useLocation } from "react-router-dom"
import { useAuth } from "../../AuthProvider"

import axios from "axios"
import { setToken } from "../../utils/Token"

function Login() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className="container mx-auto flex h-screen justify-center items-center">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // auth.signin(values.email, values.password, () => {
          //   history.replace(from);
          // })
          axios.post("http://localhost:3000/auth/sign_in", { email: values.email, password: values.password}).then((res) => {
            debugger
            setToken(res.headers);
            history.replace(from);
          })
        }}
        >
        <Form className="w-1/3 flex flex-col items-center border-2 bg-green-50">
           <div className="m-4">
             <label htmlFor="email" className="pr-4">Email Address</label>
             <Field name="email" type="email" className="border-2 text-left" placeholder="Email Address"/>
             <ErrorMessage name="email" />
           </div>

           <div className="m-4">
             <label htmlFor="password" className="pr-12">Password</label>
             <Field name="password" type="password" className="border-2" placeholder="Password"/>
             <ErrorMessage name="password" />
           </div>

           <button type="submit" className="m-4 p-1 border-2 border-green-500 bg-green-500 text-white hover:bg-green-700">Submit</button>
         </Form>
       </Formik>
     </div>
  );
};

export default Login;
