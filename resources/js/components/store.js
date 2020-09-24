import React, { createContext, useReducer } from 'react'
import authService from '../service/authService'

const initialState = {
  user: authService.getCurrentUser(),
  me: authService.getMe(),
}

const authStore = createContext(initialState)
const { Provider } = authStore

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.user }
      case 'SET_ME':
        return { ...state, me: action.me }
      case 'LOGOUT':
        return { user: null, me: null }
    }
  }, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { authStore, AuthProvider}