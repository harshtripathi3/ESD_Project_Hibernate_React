import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    let navigate=useNavigate();
    const{id}=useParams()
    const [user,setUsers]=useState({
        comp_id:"",
        email:""
    })
    
    const{comp_id,email}=user

    console.log(user)

    const onInputChange=(e)=>{
        console.log(e)
        setUsers({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{

        loadUser()
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        // await axios.post(`http://localhost:8080/api/HR/update/${id}`,user)
        let response = await fetch(`http://localhost:8080/api/HR/update/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                email: email,
                comp_id: {comp_id},
            })
        }).catch(error => {
            alert("Enter Correct Company ID or Email ID already Exists");
            console.log(error)
            navigate(`/edituser/${id}`);
        });
        navigate("/");
    };

    const loadUser =async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Company ID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter Company ID' 
                            name="comp_id"
                            value={comp_id}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder='Enter your Email'
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type='submit'  className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>

            </div>
            <div className="footer">
                <p>Made with ❤️ and 🧑‍💻 by <i>Harsh Tripathi</i></p>
            </div>
        </div>
    );
}
