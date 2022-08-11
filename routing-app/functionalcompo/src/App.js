import './App.css';
import Employees from './components/Employees';

// function App() {
  
//   return (
//     <div className="App">
//      <Employees/>
//     </div>
//   );
// }
// export default App;

function App() {
  
  return (
    <div className="App">
     <Employees id="1" name="abc"/>
     <Employees id="2" name="pqr"/>
     <Employees id="3" name="xyz"/>
    </div>
  );
}
export default App;
