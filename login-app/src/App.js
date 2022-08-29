import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/signin"><b>Sign In</b></Link>
        </li>
        {/* <li><Link to="/dashboard"><b>Dashboard</b></Link></li> */}
        <li><Link to="/register"><b>Sign Up</b></Link></li>
      </ul>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
