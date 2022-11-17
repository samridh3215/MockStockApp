import React from "react";
import SideBar from "./SideBar";
import PortfolioBox from "./PortfolioBox";
import { useFunction } from "./Home";
import {getGainers, getLosers, getSymbols} from "./responsesFromAPI"

function Portfolio() {

    return (
        <div id="portfolio-container">
            <h1 className="page-info">Your Investments</h1>
            <SideBar />
            <div className="container-md" id="portfolio-info">
                <h4 id="total-invested">Total Amount invested: </h4>
                <h4 id="current-value">Current Value:</h4>
            </div>
            <div className="portfolio">
                {useFunction(getSymbols).slice(0, 10).map(item => PortfolioBox(item))}
            </div>
        </div>
    );
}

export default Portfolio;