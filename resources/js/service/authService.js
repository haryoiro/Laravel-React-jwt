import axios from 'axios'
import authHeader from './authHeader'
const API_URI = "http://twitterad.test/api/auth/"

async function login(email, password) {
  const res = await axios.post(`${API_URI}login`, { email, password })
  if (res.data.access_token) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res.data
}

function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('me')
}

async function register(username, email, password) {
  const res = await  axios.post(`${API_URI}register`, {
    username, email, password,
  })
  if (res.data.access_token) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
}

async function me() {
  const res = await axios.get(`${API_URI}me`, { headers: authHeader() })
  localStorage.setItem('me', JSON.stringify(res.data))
  return res.data
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}
function getMe() {
  return JSON.parse(localStorage.getItem('me'))
}

export default {
  login,
  logout,
  register,
  getCurrentUser,
  getMe,
  me,
}
