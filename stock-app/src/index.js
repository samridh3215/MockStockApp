
import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./Home";
import Portfolio from "./Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./Stocks"

const root = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Portfolio" element={<Portfolio/>} />
            <Route exact path="/Stocks" element={<Stocks/>}/>
        </Routes>
    </BrowserRouter> , root
    );


