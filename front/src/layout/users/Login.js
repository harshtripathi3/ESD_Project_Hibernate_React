import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate=useNavigate()
    const [user,setUsers]=useState({
        email:"",
        password:"",
    })
    const{email,password}=user

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    }
    ;
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/student/login",user).then(result => {
            if(result.data){
                navigate("/home")
            }
            else{
                alert("Login Id Password Not Matching Please try again")
                navigate("/")
            }
        })
        .catch(error => {
            console.log(error)
            navigate("/");
        })
        
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='ID' className='form-label'>
                            ID
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your Name'
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            User Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your User Name'
                            name="password"
                            value={password}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type='submit'  className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>

            </div>
        </div>
    );
}
