import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { Button, Modal } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { authStore } from '../../store'
import * as Yup from 'Yup'
import FormField from './FormField'
import authService from '../../../service/authService'

const initialValues = {
  email: "",
  password: "",
}


const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required('Name is a required field'),
    // .min(3, "Name must be at least 3 characters"),
  password: Yup
    .string()
    .required("Please enter your password")
    // .matches(
    //   /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
})

function SmallError({ name, formik }) {
  if (formik.errors[name] && formik.touched[name]) {
    return <div style={{ marginTop: '-20px', paddingBottom: '20px' }}><small id="passwordHelpBlock" muted className="help-block text-danger">{formik.errors[name]}</small></div>
  }
  return <div style={{ height: '24px' }}>{"    "}</div>
}


function Login() {
  const { dispatch } = useContext(authStore);
  const history = useHistory()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  async function onSubmit(e) {
    try {
      const { email, password } = e
      const res = await authService.login(email, password)
      await dispatch({ type: 'SET_USER', user: JSON.stringify(res) })
      const me = await authService.me()
      await dispatch({ type: 'SET_ME', me: JSON.stringify(me) })
      return history.push('/')
    } catch (err) {
       alert("認証失敗")
    }
  }
  const emailProps = formik.getFieldProps("email")
  const passwordProps = formik.getFieldProps("password")

  return (
    <Modal.Dialog>
      <Modal.Header>
        <h1>Login</h1>
      </Modal.Header>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <div style={{ height: '24px' }}></div>
          <FormField
            label="Email"
            type="email"
            name="email"
            placeholder="email"
            {...emailProps}
          />
          <SmallError formik={formik} name="email"/>
          <FormField
            label="Passowrd"
            type="password"
            name="password"
            placeholder="password"
            {...passwordProps}
          />
          <SmallError formik={formik} name="password"/>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button variant="secondary">Cancel</Button></Link>
          <Link to="/auth/register"><Button>Register</Button></Link>
          <Button type="submit">Login</Button>
        </Modal.Footer>
      </form>
    </Modal.Dialog>
  )
}

export default Login

