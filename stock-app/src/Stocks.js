import React from "react";
import {useFunction} from "./Home"
import { getSymbols } from "./responsesFromAPI";
import SideBar from "./SideBar";



function Stocks(){
     var stockSymbols = useFunction(getSymbols);
     var i=1
     
     return(
          <div>
          <h1>All Stocks</h1>
               <SideBar/>
               <div className="stock-render-div">
                    <table className="stock-render-table">
                    <tr><th>S.No</th> <th>Company Name</th> <th>Stock Symbol</th> <th>Stock Price</th> <th>Change</th> <th>Volume</th></tr>
                    {stockSymbols.slice(0, 20).map(
                    item=><tr>
                              <td>{i++}</td>
                              <td>{item.companyName}</td> 
                              <td>{item.symbol}</td>
                              <td>{item.price}</td>
                              <td>{item.beta}</td>
                              <td>{item.volume}</td> 
                              <td style={{background:"none"}}><button  className="buy" onDoubleClick={()=>{console.log("bought", item.symbol)}}>Buy</button></td> 
                              <td style={{background:"none"}}><button className="sell" onDoubleClick={()=>{console.log("sold", item.symbol)}}>Sell</button></td> 
                              <td style={{background:"none"}}><a href={"https://finance.yahoo.com/quote/"+item.symbol+"?p="+item.symbol} className="more" target="_blank">View more</a></td>
                         </tr>
                    )}
                    </table>
               </div>
          </div>
     )
}



export default Stocks;