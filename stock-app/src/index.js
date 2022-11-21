
import React from "react";
import ReactDOM from "react-dom";
import {Home} from "./Home";
import Portfolio from "./Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./Stocks"
import Signup from "./signup";
import Login from "./login";
import Wallet from "./Wallet";

const root = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path ="/" element={<Login/>}/>
            <Route exact path ="/login" element={<Login/>}/>
            <Route exact path ="/Signup" element={<Signup/>}/>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Portfolio" element={<Portfolio/>} />
            <Route exact path="/Stocks" element={<Stocks/>}/>
            {/* <Route exact path = "/Wallet" element={<Wallet/>}/> */}
        </Routes>
    </BrowserRouter> , root
    );


