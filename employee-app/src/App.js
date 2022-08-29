import './App.css';
import NavBar from './components/NavBar';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>      
        <NavBar/>
        {/* <home/> */}
        {/* <Register/>
      <Signin/> */}
      <Routes>
      <Route exact path="/" component={Home} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
