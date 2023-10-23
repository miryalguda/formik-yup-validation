import React from 'react';

import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {useFormik} from "formik"



    const BasicForm = () => {

    const validationSchema = Yup.object({
        
        firstName: Yup.string( ).required("Add first name here"),
        lastName: Yup.string( ).required("Add last name here"),
        email: Yup.string().required(""),
        uername: Yup.string( ).required("Username is required"),
        password: Yup.string( ).required("password  is required"),
       
    });
    const  formik = useFormik ({ 
    initialValues : {
        firstName: '',
        lastName: '',
        email: '',
        username: ' ',
        password: ' ',
    },

     onSubmit : (values) => {
        alert(JSON.stringify(values, null, 2))
    },
    validate: (values) => {
        let errors = {};
        if (!values.email) errors.email = "field required";
        if (!values.password) errors.password = "field required";
        return errors;
      },


});
    const  renderError = (message) => <p> {message} </p>;

      return (
        <div>
            <h1 style = {{ color : "red", textAlign: "center"}}>Sign Up Form</h1>


        <Formik
        initialValues={formik.initialValues}
        validationSchema={validationSchema}
        >
      
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
          <div className="container">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <div className="control">
              <Field
                name="firstName"
                type="text"
                className="input"
                placeholder="FirstName"
              />
              <ErrorMessage name="firstName" render={renderError} />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <div className="control">
              <Field
                name="lastName"
                type="text"
                className="input"
                placeholder="LastName"
              />
              <ErrorMessage name="lastName" render={renderError} />
            </div>
          </div>
        
          <div className="row g-3 align-items-center">
            <div className="col-auto"></div>
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <input
                name="email"
                type="text"
                className="input"
                placeholder="Email address"
                onChange = {formik.handleChange}
                value = {formik.values.email} />
              
              <ErrorMessage name="email" style = {{ color: "red"}} render={renderError} />
              {formik.errors.email ? (<div id = "emailError" style = {{ color: "blue"}}> {formik.errors.email}</div>): null}
            </div>
          </div>
   
          <button type="submit" className="btn btn-primary">   
            Submit
          </button>
</div>
{/*}  USERNAME  {*/}
<div className="container p-3 mt-3 mb-3" style= {{backgroundColor: "#fff", border: "2px solid rgb(232, 150, 150)", width: "900px", height: "600px", position:"relative"}}>

        <div className="container p-3 mr-3  row g-3 align-items-center">
            <div className="col-auto">
                <label type = "text" className="col-form-label"style={{color: "blue"}} >Username</label>
            </div>
            <div className="col-auto">
                <input type="text" id="username" className="form-control" aria-describedby="passwordHelpInline" />
            </div>           
        </div>
{/*}  USERNAME  ENDING{*/} 

{/*}  PASSWORD  {*/}
        
            <div className="container row g-3 align-items-center" >
            <div className="col-auto">  
                <label htmlFor="inputPassword6" className="col-form-label" style={{color: "blue"}} >Password</label>
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="col-auto">
                <span id="passwordHelpInline" className="form-text" style={{color: "red"}}>
                Must be 8-20 characters long.
                </span>
                
            </div>
            
            </div>

            <div className="p-3 d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">Login</button>
           
          </div>


            
 {/*}  PASSWORD  ENDING{*/} 
          
            </div>
      </Form>
    </Formik>
    </div>
    
    )
};




export  default BasicForm