import React from 'react'
import {useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Axios from "axios";
import '../../slices/login.css'

function RegisterForm() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [confirm_Password, setconfirm_Password] = useState("");
//   useEffect(() => {
//     Axios.get("http://localhost:3001/getUsers").then((response) => {
//       setListOfUsers(response.data);
//     });
//   }, []);

  const writeUser = () => {
    Axios.post("http://localhost:3001/writeUser", {
      name,
      email,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          email,
          password,
        },
      ]);
      console.log(response.data.status)
      if (response.data.status === 'ok')
      {
        //   setOk(true)
          navigate("/")

      }
    });
  };

  return (
    <div>
      {/* <div className="UsersDisplay">
        {listOfUsers.map((user) => {
          return (
            // <div>
            //   <h1>name: {user.name}</h1>
            //   <h1>email: {user.email}</h1>
            //   <h1>password: {user.password}</h1>
            //   {/* <h1>Confirm password: {user.confirm_Password}</h1>
            // </div>
          );
        }
        )};
     </div> */}
      <div className='container'>
        <h1 className='text-center mb-5'>Register</h1>
        <div className='d-flex flex-column align-items-center '>
        <input
          type="text"
          placeholder="name..."
          className=''
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <input
          type="email"
          className=' mt-4'
          placeholder="emailid..."
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <input 
          type="text"
          className='mt-4'
          placeholder="password..."
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        </div>
        <button className='btn btn-primary text-center mt-5 ms-5' onClick={writeUser}> Create User </button>
    </div>
    </div>
);}

export default RegisterForm