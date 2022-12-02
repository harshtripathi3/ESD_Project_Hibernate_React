import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom'
<link href="https://fonts.googleapis.com/css?family=Nunito|Pacifico&display=swap" rel="stylesheet"></link>

export default function Home() {
    let navigate=useNavigate()
    const [users, setUsers] = useState([])
    const [id, setid] = useState({
        hr_id:""
    })
    useEffect(() => {
        loadUsers();

    }, []
    );
    const {hr_id}=id;
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/HR/get");
        setUsers(result.data);

    }
    const deleteUser = async (cid) => {
        await axios.delete(`http://localhost:8080/api/HR/del/${cid}`)
        loadUsers()
    }

    const onInputChange=(e)=>{
        setid({...id,[e.target.name]:e.target.value});
    }
    ;

    const onSubmit=async(e)=>{
        //setid({...id,[e.target.name]:e.target.value});
        console.log(hr_id);
        navigate(`/viewuser/${hr_id}`);
    };



    var d = new Date();
    var time = d.getHours();
    if (time < 12) {
        var gree = "Good Morning"
    }
    if (time > 12) {
        var gree = "Good Afternoon"
    }
    if (time === 12) {
        var gree = "Go Eat Lunch"
    }

    return (


        <div className='container'>
            <h1><i>{gree}</i></h1>
            <br></br>

            {/* <Link className='btn btn-outline-light' to="/adduser">Add User</Link> */}
            <Link className='btn btn-outline-primary ' to="/adduser">Add HR</Link>
            <Link className='btn btn-outline-primary ' to="/vieworg">View Organisations</Link>
            <form onSubmit={(e)=>onSubmit(e)}>
            <div class="wrap">
                <div class="search">
                    <input type="text" 
                    class="searchTerm" 
                    placeholder="Enter HR ID"
                    name="hr_id"
                    value={hr_id}
                    onChange={(e)=>onInputChange(e)}
                    />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            </form>


            <div className='py-4'>
                <Table striped bordered hover >
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
                </Table>

            </div>
            <div className="footer">
                <p>Made with ❤️ and 🧑‍💻 by <i>Harsh Tripathi</i></p>
            </div>
        </div>
    )
}
