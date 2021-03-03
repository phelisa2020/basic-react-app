import logo from './logo.svg';

import React, {Component} from "react";

import './App.css';
import Menu from "./components/Menu";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      
        <div>
        {/* <Menu /> */}
         <Header />
         <Content />
         <Footer />
         

          
        </div>
      
    </div>
  );
}


export default App;
