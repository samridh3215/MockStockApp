import React, { useState } from "react";
import SideBar from "./SideBar";
import PortfolioBox from "./PortfolioBox";
import { useFunction } from "./Home";
import {getGainers, getLosers, getSymbols} from "./responsesFromAPI"

async function getUserDetails(){
    const user = localStorage.getItem("userData")
    const userJSON = JSON.parse(user)
    const url = `http://localhost:8080/api/update/${userJSON.email}`;
    const response  = await fetch(url);
    if(!response.ok) console.log(response.statusText)
    return response.json()

  } 

function Portfolio() {

    const data = useFunction(getUserDetails)
    // const portData = data.data.holdings
    // console.log(portData)

    return (
        <div id="portfolio-container">
            <h1 className="page-info">Your Investments</h1>
            <SideBar />

            <div className="portfolio">
                {useFunction(getSymbols).slice(0, 10).map(item => PortfolioBox(item))}
            </div>
            {/* <h6>(logged in as {data.data.name})</h6> */}
        </div>
        
    );
}

export default Portfolio;