import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <AddProduct />
      <hr />
      <SignUpUser />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
