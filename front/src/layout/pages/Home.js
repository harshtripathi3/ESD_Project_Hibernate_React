import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {
    const [users, setUsers] = useState([])
    const { id } = useParams()
    useEffect(() => {
        loadUsers();

    }, []
    );
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/HR/get");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/HR/del/${id}`)
        loadUsers()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Company</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.f_name}</td>
                                    <td>{user.l_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.comp_id.comp_name}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.hr_id}`}>
                                            View
                                        </Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.hr_id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.hr_id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
