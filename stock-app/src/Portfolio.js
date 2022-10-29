import React from "react";
import SideBar from "./SideBar";

function Portfolio(){

    return(
        <>
        <h1>Your Investments</h1>
        <div className="container-md" id = "portfolio-info">
            <h4  id="total-invested">Total Amount invested: </h4>
            <h4  id ="current-value">Current Value: </h4>
        </div>
        <div className="portfolio">
            <SideBar/>
        </div>
        </>
    );
}

export default Portfolio;