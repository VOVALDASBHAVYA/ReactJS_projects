import './App.css';
import './components/Student'
import Student from './components/Student';
function App() {
  return (
    <div className="App">
      {/* <Student/> */}
        <Student id="1" name="abc" age="30" address="300-lane street"/>
        <Student id="2" name="pqr" age="40" address="400 so and so street"/>
        <Student id="3" name="xyz" age="50" address="500 y shud i tell street"/>
    </div>
  );
}

export default App;
