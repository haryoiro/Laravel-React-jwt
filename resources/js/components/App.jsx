import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import { AuthProvider, authStore } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './nav/NavBar'
import UserDetail from './page/UserDetail'
import About from './page/About'
import User from './page/User'
import Top from './page/Top'
import Register from './page/Auth/Register'
import Login from './page/Auth/Login'
import Logout from './page/Auth/Logout'

export default function App() {
	return (
		<Router>
			<div className="container">
				<Switch>
					<div>
						<NavBar />
						<Route exact path="/" component={Top} /> 
						<Route path="/about" component={About} /> 
						<Route exact path="/user" component={User} />
						<Route path="/user/:id" component={UserDetail} />
						<Route path="/auth/register" component={Register} />
						<Route path="/auth/login" component={Login} />
						<Route path="/auth/logout" component={Logout} />
					</div>
				</Switch>
			</div>
		</Router>
	)
}


const root = document.getElementById('app')
if (root) {
	ReactDOM.render(
		<AuthProvider store={authStore}>
			<App />
		</AuthProvider>,
		root
	)
}