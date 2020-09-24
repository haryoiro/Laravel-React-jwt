import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const res = await axios.get("/api/user");
        console.log(res.data);
        setUsers(res.data.users);
    }

    return (
			<div>
			<h2>USER</h2>
				<table className="table">
            <tr>
                <th scope="col"> name</th>
                <th scope="col"> details</th>
            </tr>
            {users.map(user => (
							<tr key={user.id}>
								<th scope="row">{user.id}</th>
								<td>{user.name}</td>
								<td>
										<Link to={`/user/${user.id}`}>詳細</Link>
								</td>
							</tr>
            ))}
				</table>
			</div>
    );
}
