import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function ProfileDropdown({ title }) {
  return (
    <NavDropdown id="nav-dropdown" title={title}>
      <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/auth/logout" eventKey="4.4">Logout</NavDropdown.Item>
    </NavDropdown>
  )
}
  {/* 
  <Dropdown as={NavItem}>
  <Dropdown.Toggle
      as={NavLink}
      id="dropdown-basic-button"
    >{state.name}</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item >Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown> */}

export default ProfileDropdown
