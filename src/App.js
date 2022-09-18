import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Main from './pages/Main';
import Main2 from "./Main2.js";
import "./style/base/base.scss";

const App = () =>{
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/main2" element={<Main2/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;