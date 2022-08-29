import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';

function App() {
  
  return (
    <div className="App">
     {/* <StudentList/> */}
     <BrowserRouter>
     <ul>
      <li>
        <Link to="/create">Create Student</Link></li>
        <li><Link to="/list">List Student</Link></li>
     </ul>
     <Routes>
      <Route path="/create" element={<CreateStudent/>}/>
      <Route path="/update/:id" element={<UpdateStudent/>}/>
      <Route path='/list' element={<StudentList/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
