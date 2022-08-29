import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import FakeApi from './FakeApi';

function NavBar() {
  return (
    <div>
   <BrowserRouter>
    {/* <ul>
    <li><Link to="/fakeapi"><b></b></Link></li>
    </ul> */}
      <Routes>
     <Route path="/fakeapi" element={<FakeApi/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar



      
    {/* <BrowserRouter> */}
    
        {/* <li key={Signin}><Link to="/signin"><b></b></Link></li> */}
        {/* <li><Link to="/dashboard"><b>Dashboard</b></Link></li> */}
        {/* <li key={Register}><Link to="/register"><b></b></Link></li> */}
      
      {/* <Routes> */}
        {/* <Route path="/signin" element={<Signin/>}/> */}
        {/* <Route path="/fakeapi" element={<FakeApi/>}/> */}
        {/* <Route path="/register" element={<Register/>}/> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      {/* <p style={{color:"green"}}>Here you will get everything....you want</p>
          
        <button className="btn btn-primary btn-sm" onClick={signin}
                    id="left" style={{margin:"10px",color:"white"}}>
            Sign In
        </button> 
        <button className="btn btn-primary btn-sm" onClick={register}
                id="right" style={{color:"white"}}>
            Sign Up
        </button> */}