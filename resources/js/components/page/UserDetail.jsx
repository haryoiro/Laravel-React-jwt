import React, {useEffect, useState } from 'react'
import axios from 'axios'

export default function UserDetail(props) {
  const [user, setUser] = useState([])

  useEffect(() => { getUser() }, [])

  async function getUser() {
    const res = await axios.get(`/api/user/${props.match.params.id}`)
    setUser(res.data.user)
  }

  return (
    <div>
      <h1>User detail</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID </th>
            <th scope="col">name </th>
            <th scope="col">email </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
