import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import FakeApi from './Components/RegisterForm/FakeApi';
import images from './Components/RegisterForm/images.jpg';
import Signin from './Components/RegisterForm/Signin';
import Register from './Components/RegisterForm/Register';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <ul>
    <li><Link to="/signin"><b>Sign In</b></Link></li>
    <li><Link to="/register"><b>Sign Up</b></Link></li>
    </ul>
     {/* <div className="card" style={{width: "22rem", margin:"0 auto"}}>
    <img className="card-img-center" src={images}
                alt="Cardimg" id='id'style={{height:"22rem",width:"22rem"}}></img>
                
    <div className="card-body">
        <h5 className="card-title" style={{color:"green"}}>
           SHOP MART
        </h5>
          
        <p className="card-text" style={{color:"green"}}>
        </p>
          
        <p className="card-text" style={{color:"green"}}>

        </p>
    </div>
    </div>  */}
    
      <Routes> 
        <Route exact path="/signin" element={<Signin/>}/> 
        <Route path="/fakeapi" element={<FakeApi/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>

         

     {/* <h1>Welcome to home page</h1> */}
     {/* <FakeApi/> */}
    
     </div>
  );
}

export default App;
