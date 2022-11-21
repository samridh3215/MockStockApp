import React, { useState } from "react";
import SideBar from "./SideBar";
import PortfolioBox from "./PortfolioBox";
import { useFunction } from "./Home";
import {getGainers, getLosers, getSymbols} from "./responsesFromAPI"



function Portfolio() {
    const [holdings, setHoldings] = useState([])
    const user = localStorage.getItem("userData")
    const userJSON = JSON.parse(user)

    return (
        <div id="portfolio-container">
            <h1 className="page-info">Your Investments</h1>
            <SideBar />

            <div className="portfolio">
                {useFunction(getSymbols).slice(0, 10).map(item => PortfolioBox(item))}
            </div>
            <h6>(logged in as {userJSON.email})</h6>
        </div>
        
    );
}

export default Portfolio;