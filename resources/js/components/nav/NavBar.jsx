import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import ProfileDropdown from './ProfileDropdown'
import { authStore } from '../store'

export default function NavBar() {
	const { state } = useContext(authStore)

	return (
		<Navbar>
			<Navbar.Brand href="#home">Yours</Navbar.Brand>
			<Nav.Link href="/">Top</Nav.Link>
			<Nav.Link  href="/about">About</Nav.Link>
			<Nav.Link href="/user">Users</Nav.Link>
			<Navbar.Collapse className="justify-content-end">
				{!state.user
					? (<>
						<Link className="nav-link" to="/auth/register">Register</Link>
						<Link className="nav-link" to="/auth/login">Login</Link>
						</>
					)
					: <ProfileDropdown title={state.me.name}/>
					}
				</Navbar.Collapse>
		</Navbar>
	)
}

