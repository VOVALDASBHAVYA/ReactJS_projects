import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <ul>
        <li key={Signin}>
          <Link to="/signin"><b></b></Link>
        </li>
        {/* <li><Link to="/dashboard"><b>Dashboard</b></Link></li> */}
      {/*}  <li key={Register}><Link to="/register"><b></b></Link></li>
      </ul>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/fakeapi" element={<FakeApi/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter> */}
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
