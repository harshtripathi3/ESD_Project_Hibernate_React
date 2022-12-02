import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CompHR() {

    const[users,setUsers]=useState([])

    const{id}=useParams();
    useEffect(()=>{
        loadUser();

    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/api/comp/getHRid/${id}`)
        setUsers(result.data)
        console.log(result.data)
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Deatiled HR</h2>
            <div className='card'>
                <div className='card-header'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope='col'>Contact</th>
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
                                    <td>{user.con}</td>
                                    <td>

                                        {/* <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.hr_id)}>Delete</button> */}
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>

                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/vieworg"}>Back to Home</Link>
        </div>
        </div>
        <div className="footer">
                <p>Made with ❤️ and 🧑‍💻 by <i>Harsh Tripathi</i></p>
            </div>
        </div>
  )
}
