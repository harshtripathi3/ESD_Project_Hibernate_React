import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
    let navigate=useNavigate()
    const [user,setUsers]=useState({
        comp_name:"",
        comp_add:"",
    })
    const{comp_name,comp_add}=user

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    }
    ;
    const onSubmit=async(e)=>{
        e.preventDefault();
        // await axios.post(`http://localhost:8080/api/HR/update/${id}`,user)
        let response = await fetch(`http://localhost:8080/api/comp/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                comp_name : comp_name,
                comp_add: comp_add
            })
        }).catch(error => {
            alert("Please Check Details");
            console.log(error)
            navigate(`/addorg`);
            
        });
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register Organisation</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
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
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Organisation Address
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder='Enter your User Name'
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
