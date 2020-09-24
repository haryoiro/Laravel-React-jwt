import React, { useEffect, useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import AuthService from '../../../service/authService'
import { authStore } from '../../store'


export default function Logout() {
  const { dispatch } = useContext(authStore)
  const history = useHistory()

  useEffect(() => { logouter() }, [])
  const logouter = async () => {
    await AuthService.logout()
    await dispatch({ type: 'LOGOUT' })
    await history.push('/')
  }

  return <div>redirect</div>
}
