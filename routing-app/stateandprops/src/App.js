import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Product id="1" name="abc" quantity="30" price="300"/>
        <Product id="2" name="pqr" quantity="40" price="400"/>
        <Product id="3" name="xyz" quantity="50" price="500"/>
    </div>
  );
}

export default App;
