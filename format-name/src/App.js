import './App.css';
import './Name_format.js';
import Name_format from './Name_format.js';

function App() {
  // function formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }
  
  // const user = {
  //   firstName: 'Harper',
  //   lastName: 'Perez'
  // };
  
  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // );
  return (
    <div className="App">
  <h1>NameFormat</h1>
    <Name_format/>
      </div>
  );
}

export default App;
