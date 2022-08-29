import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul>
      <li><Link to="/home"><b>Home</b></Link></li>
        <li><Link to="/signin"><b>Signin</b></Link></li>
        <li><Link to="/signup"><b>SignUp</b></Link></li>
      </ul>
      

    </div>
  )
}

export default NavBar