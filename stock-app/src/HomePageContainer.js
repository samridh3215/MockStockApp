import React from "react";
import { useFunction } from "./Home";
import { getSymbols, getGainers, getLosers } from "./responsesFromAPI";


function HomePageContainer(props){
    var gainers = useFunction(getGainers);
    var losers = useFunction(getLosers);
    var symbols = useFunction(getSymbols);

    return (
        <div>
        
        <div className="big-home-container">
            <div className="home-container" id ="Gainers">
                <h3 style={{color: "green"}}>Gainers</h3>
                <ul>{gainers.map(item=>(<li>{item.symbol} -- [change:+{item.change}]</li>))} </ul>
            </div>
            <div className="home-container" id = "Losers">
                <h3 style={{ color: "red" }}>Losers</h3>
                <ul>{losers.map(item=>(<li>{item.symbol} -- [change:{item.change}]</li>))} </ul>
            </div>
            <div className="home-container" id = "Holdings">
                <h3>Holdings</h3>
                <ul>{symbols.slice(0,10).map(item=>(<li>{item.symbol} -- [price: {item.price}]</li>))} </ul>
            </div>
        </div>
        </div>
    );
}

export default HomePageContainer;