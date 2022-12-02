import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate=useNavigate()
    const [user,setUsers]=useState({
        f_name:"",
        l_name:"",
        email:"",
        con:"",
        comp_name:"",
        comp_add:"",
    })
    const{f_name,l_name,email,con,comp_name,comp_add}=user

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    }
    ;
    const onSubmit=async(e)=>{
        e.preventDefault();
        // await axios.post(`http://localhost:8080/api/HR/update/${id}`,user)
        let response = await fetch(`http://localhost:8080/api/HR/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                f_name: f_name,
                l_name : l_name,
                email: email,
                con : con,
                comp_id: {comp_name,comp_add},
            })
        }).catch(error => {
            alert("Email ID already Exists");
            console.log(error)
            navigate(`/adduser`);
            
        });
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register HR</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            First Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your Name'
                            name="f_name"
                            value={f_name}
                            onChange={(e)=>onInputChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Last Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your User Name'
                            name="l_name"
                            value={l_name}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Email
                        </label>
                        <input
                            type={"email"}
                            className="form-control"
                            placeholder='Enter your Email'
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Contact
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            pattern="[0-9]{10}" 
                            maxlength="10"
                            placeholder='10 Digit Phone'
                            name="con"
                            value={con}
                            onChange={(e)=>onInputChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Organisation Name
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter Org Name'
                            name="comp_name"
                            value={comp_name}
                            onChange={(e)=>onInputChange(e)}
                            
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Organisation Address
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter Org Address'
                            name="comp_add"
                            value={comp_add}
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
