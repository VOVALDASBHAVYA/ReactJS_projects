import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
function Signin() {
    const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate('');
    let login=(e)=>{
        e.preventDefault();
        if(name===password){
           navigate("/FakeApi");
        }else{
            alert("Invalid user name or password.......")
        }
    }
  return (
    <div className='container'>
      <h1>Login Application</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
    <input type="text" className="form-control" id="exampleInputUsername" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
</form>
{name}
{password}
    </div>
  )
}

export default Signin
