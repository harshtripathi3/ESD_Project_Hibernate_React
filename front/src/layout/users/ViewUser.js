import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const[user,setUsers]=useState({
        name:"",
        username:"",
        email:""
    })

    const{id}=useParams();
    useEffect(()=>{
        loadUser();

    },[]);

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data)
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Deatiled User</h2>
            <div className='card'>
                <div className='card-header'>
                    Deatils of user:  {user.id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>Name : {user.name}</b></li>
                        <li className='list-group-item'><b>User Name : {user.username}</b></li>
                        <li className='list-group-item'><b>Mail : {user.email}</b></li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
        </div>
        </div>
  )
}
