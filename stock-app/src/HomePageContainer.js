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
            <h1 className="render-info">Gainers</h1>
                {gainers.map(item =>
                    <HomePageBox companyName={item.companyName} price={item.price} symbol={item.symbol} change={item.beta}/>
                )}
            </div>
            
            <div className="render-box losers">
            <h1 className="render-info">Losers</h1>
                {losers.map(item =>
                    <HomePageBox companyName={item.companyName} price={item.price} symbol={item.symbol} change={item.beta}/>
                )}
            </div>
            {/* <table className="stock-render-table losers">
                    <tr><th>S.No</th> <th>Company Name</th> <th>Stock Symbol</th> <th>Change</th></tr>
                    {losers.slice(0, 20).map(
                    item=><tr>
                              <td>{i++}</td>
                              <td>{item.companyName}</td> 
                              <td>{item.symbol}</td>
                              <td>{item.beta}</td>  
                              <td style={{background:"none"}}><a href="/Stocks/details" className="more">View more</a></td>
                         </tr>
                    )}
            </table> */}
        </div>
    );
}

export default HomePageContainer;