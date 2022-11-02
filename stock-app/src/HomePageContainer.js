import React from "react";

function HomePageContainer(){
    return (
        <div>
        <h1 className="page-info">Stocks at a glance</h1>
        <div className="big-home-container">
            <div className="home-container" id ="Gainers">
                <h3 style={{color: "green"}}>Gainers</h3>
                
            </div>
            <div className="home-container" id = "Losers">
                <h3 style={{ color: "red" }}>Losers</h3>
            </div>
            <div className="home-container" id = "Holdings">
                <h3>Holdings</h3>
            </div>
        </div>
        </div>
    );
}

export default HomePageContainer;