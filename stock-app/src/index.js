
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Portfolio" element={<Portfolio/>} />
        </Routes>
    </BrowserRouter> , root
    );


