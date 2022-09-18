import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './pages/Main';
import Footer from "./components/Footer.js";
import "./style/base/base.scss";

const App = () =>{
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
       
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
}

export default App;