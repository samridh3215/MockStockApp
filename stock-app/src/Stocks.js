import React from "react";
import {useFunction} from "./Home"
import { getSymbols } from "./responsesFromAPI";
import SideBar from "./SideBar";

const urlForDetails = "https://financialmodelingprep.com/api/v3/quote/"


function Stocks(){

     var stockSymbols = useFunction(getSymbols);
     return(
          <div>
          <h1>All Stocks</h1>
               <SideBar/>
               <div className="stock-render-div">
                    <table className="stock-render-table">
                    <tr><th>Company Name</th> <th>Stock Symbol</th> <th>Stock Price</th> <th>Volume</th> <th>Change</th></tr>
                    {stockSymbols.slice(0, 20).map(item=><tr><td>{item.companyName}</td> <td>{item.symbol}</td> <td>{item.price}</td></tr>)}
                    </table>
               </div>
          </div>
     )
}


export default Stocks;