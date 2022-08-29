import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ul>
      <li>
        <Link to="/create">Create Employee</Link></li>
        <li><Link to="/list">List Employee</Link></li>
     </ul>
     <Routes>
      <Route path="/create" element={<CreateEmployee/>}/>
      <Route path="/update/:id" element={<UpdateEmployee/>}/>
      <Route path='/list' element={<EmployeeList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
