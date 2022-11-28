import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function ViewOrg() {
    const [users, setUsers] = useState([])
    //const { id } = useParams()
    useEffect(() => {
        loadUsers();

    }, []
    );
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/comp/get");
        setUsers(result.data);
    }

    // const deleteUser = async (id) => {
    //     await axios.delete(`http://localhost:8080/api/HR/del/${id}`)
    //     loadUsers()
    // }

    return (
        
        <div className='container'>
            {/* <Link className='btn btn-outline-light' to="/adduser">Add User</Link> */}

            <div className='py-4'>
                <table className="table border shadow table-light">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope='col'>Handles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.comp_id}</td>
                                    <td>{user.comp_name}</td>
                                    <td>{user.comp_add}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/orghr/${user.comp_id}`}>
                                            View
                                        </Link>
                                        {/* <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.comp_id)}>Delete</button> */}
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
