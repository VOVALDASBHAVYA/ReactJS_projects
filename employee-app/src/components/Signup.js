 import React from 'react'
 import {useState} from 'react';
 import {useNavigate} from 'react-router-dom';
 function SignUp() {
  const[name,setName]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');
    const[address,setAddress]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const navigate=useNavigate();
    let logout=(e)=>{
        e.preventDefault();
        // if(password===confirmPassword){
        //    navigate("/dashboard");
        // }else{
        //     alert("Invalid user name or password.......")
        // }
        // let obj = {
        //   name: name,
        //   password:password,
        //   email:email,
        //   address:address,
        //   confirmPassword: confirmPassword,
        // };
        navigate("/dashboard");
    }
  return (
     
        <div className="container">  
          <div className="form">  
          <h1>Register</h1>  
          </div>  

          <div className="mb-3">  
                  <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                  <input type="text" className="form-control" id="exampleInputName" onChange={(e)=>setName(e.target.value)}/>
                </div>             
               <div className="mb-3"> 
                  <label htmlFor="exampleInputUsername" className="form-label">Email Id</label>
                  <input type="text" className="form-control" id="exampleInputEmail" onChange={(e)=>setEmail(e.target.value)}/>  
                </div>  
                <div className="mb-3">  
                  <label htmlFor="exampleInputUsername" className="form-label">Address</label>
                  <input type="text" className="form-control" id="exampleInputAddress" onChange={(e)=>setAddress(e.target.value)}/>   
                </div>            
                <div className="mb-3">  
                  <label htmlFor="exampleInputUsername" className="form-label">Password</label>
                  <input type="text" className="form-control" id="exampleInputPassword" onChange={(e)=>setPassword(e.target.value)}/>
                </div>  
                <div className="mb-3">  
                  <label htmlFor="exampleInputUsername" className="form-label">confirmPassword</label>
                  <input type="text" className="form-control" id="exampleInputConfirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>   
                </div>
              <div className="form-check">  
                <label className="form-check-label">  
                  <input type="checkbox" className="form-check-input"/>  
                  I hereby agree to the <a href="/"> Terms and Conditions. </a>  
                </label>  
              </div>  
                    <button type="button" className="btn btn-primary" onClick={logout}> Submit </button>  
                    
          </div>       
  )
}

export default SignUp
