import React from "react";
import { useFunction } from "./Home";
import { getSymbols, getGainers, getLosers } from "./responsesFromAPI";
import HomePageBox from "./HomePageBox";

function HomePageContainer(props){
    var gainers = useFunction(getGainers);
    var losers = useFunction(getLosers);
    var symbols = useFunction(getSymbols);
    return (
        <div className="big-home-container">
            <div className="render-box gainers">
            <h2 className="render-info">Gainers</h2>
                {gainers.map(item =>
                    <HomePageBox companyName={item.companyName} price={item.price} symbol={item.symbol} change={item.beta}/>
                )}
            </div>
            
            <div className="render-box losers">
            <h2 className="render-info">Losers</h2>
                {losers.map(item =>
                    <HomePageBox companyName={item.companyName} price={item.price} symbol={item.symbol} change={item.beta}/>
                )}
            </div>
        </div>
    );
}

export default HomePageContainer;