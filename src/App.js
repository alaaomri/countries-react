import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <div className="d-flex" id="wrapper">  
        <SideBar/>
        <Home/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
