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
import ErrorPage from './components/ErrorPage';

const App=()=> {
  return (
    <>
    
     

      <Router>

     <Header></Header> 

    <Routes>
      <Route path="/" element={<Main ></Main>} />
      <Route path="cart" element={<Cart />} />
      <Route path="/tr/" element={<Main ></Main>} />
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  </Router>,

      

    <footer style={{backgroundColor:'#142b4f',color:'white',minHeight:'10vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <h6 style={{fontSize:14}}>This is a part of an assignment for selection in internship</h6>
      </footer>  
    </>
  );
}

export default App;
