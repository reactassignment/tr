import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";

import Cart from './components/Cart'

const App=()=> {
  return (
    <>
    
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}

      <Router>

     <Header></Header> 
      

      
   
    
    <Routes>
      <Route path="/" element={<Main ></Main>} />
      <Route path="cart" element={<Cart />} />
      <Route path="/tr/" element={<Main ></Main>} />
      
    </Routes>
  </Router>,

      

    <footer style={{backgroundColor:'#142b4f',color:'white',minHeight:'10vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <h6 style={{fontSize:14}}>This is a part of an assignment for selection in internship</h6>
      </footer>  
    </>
  );
}

export default App;
