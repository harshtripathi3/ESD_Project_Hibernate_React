import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewUser() {

    const[user,setUsers]=useState({
        f_name:"",
        l_name:"",
        email:"",
        con:"",
        comp_id:{
            comp_name:"",
            comp_add:""
        }
    })

    const{id}=useParams();
    useEffect(()=>{
        loadUser();

    },[]);

    const loadUser=async()=>{
        
        const result=await axios.get(`http://localhost:8080/api/HR/getHR/${id}`)
        setUsers(result.data)
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Deatiled HR</h2>
            <div className='card'>
                <div className='card-header'>
                    Deatils of HR:  {user.hr_id}
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'><b>First Name : {user.f_name}</b></li>
                        <li className='list-group-item'><b>Last Name : {user.l_name}</b></li>
                        <li className='list-group-item'><b>Mail : {user.email}</b></li>
                        <li className='list-group-item'><b>Contact : {user.con}</b></li>
                        <li className='list-group-item'><b>Company : {user.comp_id.comp_name}</b></li>
                        <li className='list-group-item'><b>Company Address : {user.comp_id.comp_add}</b></li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
        </div>
        <div className="footer">
                <p>Made with ❤️ and 🧑‍💻 by <i>Harsh Tripathi</i></p>
            </div>
        </div>
  )
}
