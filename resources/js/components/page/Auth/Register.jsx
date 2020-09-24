import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from 'Yup'
import FormField from './FormField'
import authService from '../../../service/authService'

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('Name is a required field')
    .min(3, "Name must be at least 3 characters"),
  email: Yup
    .string()
    .email()
    .required("Email is a required field"),
  password: Yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
  confirmPassword: Yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
    })
})

function Register() {

  async function onSubmit(e) {
    // const a = e.target.value
    const { email, name, password } = e
    const a = await authService.register(name, email, password)
  }

  return (
    <RegisterForm onSubmit={onSubmit} />
  )
}

function SmallError({ name, formik }) {
  if (formik.errors[name] && formik.touched[name]) {
    return <div style={{ marginTop: '-20px', paddingBottom: '20px' }}><small id="passwordHelpBlock" muted className="help-block text-danger">{formik.errors[name]}</small></div>
  }
  return <div style={{ height: '24px' }}>{"    "}</div>
}

function RegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const nameProps = formik.getFieldProps("name")
  const emailProps = formik.getFieldProps("email")
  const passwordProps = formik.getFieldProps("password")
  const confirmPasswordProps = formik.getFieldProps("confirmPassword")

  return (
    <Modal.Dialog>
      <Modal.Header>
        <h1>Register</h1>
      </Modal.Header>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <div style={{ height: '24px' }}></div>
          <FormField
            label="Name"
            type="text"
            name="name"
            placeholder="Please Enter your name"
            {...nameProps}
          />
          <SmallError formik={formik} name="name"/>
          <FormField
            label="Email"
            type="email"
            name="email"
            placeholder="example@exampe.com"
            {...emailProps}
          />
          <SmallError formik={formik} name="email"/>
          <FormField
            label="Passowrd"
            type="password"
            name="password"
            placeholder="Passowrd"
            {...passwordProps}
          />
          <SmallError formik={formik} name="password"/>
          <FormField
            label="Confirm"
            type="password"
            name="confirm-password"
            placeholder="Please Confirm your password"
            {...confirmPasswordProps}
          />
          <SmallError formik={formik} name="confirm-password"/>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button variant="secondary">Cancel</Button></Link>
          <Link to="/auth/login"><Button>Login</Button></Link>
          <Button type="submit">Register</Button>
        </Modal.Footer>
      </form>
      
    </Modal.Dialog>
  )
}



export default Register
