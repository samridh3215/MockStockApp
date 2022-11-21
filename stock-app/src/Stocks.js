import React from "react";
import {useFunction} from "./Home"
import { getSymbols } from "./responsesFromAPI";
import SideBar from "./SideBar";
const axios = require("axios")


async function buy(item, price){
     const user = localStorage.getItem("userData")
     const userJSON = JSON.parse(user)
     const url = `http://localhost:8080/api/buy/${userJSON.email}/${item}/${price}`;
     const response  = await fetch(url);
     if(!response.ok) console.log(response.statusText)

} 
async function sell(item, price){
     const user = localStorage.getItem("userData")
     const userJSON = JSON.parse(user)
     const url = `http://localhost:8080/api/sell/${userJSON.email}/${item}/${price}`;
     const response  = await fetch(url);
     if(!response.ok) console.log(response.statusText)

} 
   

function Stocks(){
     var stockSymbols = useFunction(getSymbols);
     var i=1
     const user = localStorage.getItem("userData")
     const userJSON = JSON.parse(user)
     return(
          <div>
          <h1>All Stocks</h1>
               <SideBar/>
               
               <div className="stock-render-div">
                    <table className="stock-render-table steelBlueCols" id="glass-object">
                    <tr className="tableheader"><th>S.No</th> <th>Company Name</th> <th>Stock Symbol</th> <th>Stock Price</th> <th>Potential Change</th> <th>Volume</th></tr>
                    {stockSymbols.map(
                    item=><tr>
                              <td className="table-item">{i++}</td>
                              <td className="table-item">{item.companyName}</td> 
                              <td className="table-item">{item.symbol}</td>
                              <td className="table-item">{item.price}</td>
                              <td className="table-item">{item.beta}</td>
                              <td className="table-item">{item.volume}</td> 
                              <td className="table-item" style={{background:"none"}}><button  className="buy btn-outline-success" onDoubleClick={()=>{buy(item.symbol, item.price); alert("bought")}}/*{()=>{alert(`bought ${item.symbol}`)}}*/>Buy</button></td> 
                              <td className="table-item" style={{background:"none"}}><button className="sell btn-outline-danger" onDoubleClick={sell(item.symbol, item.price)}>Sell</button></td> 
                              <td className="table-item" style={{background:"none"}}><a href={"https://finance.yahoo.com/quote/"+item.symbol+"?p="+item.symbol} className="more" target="_blank">View more</a></td>
                         </tr>
                    )}
                    </table>
               </div>
               <h6>(logged in as {userJSON.email})</h6>     
          </div>
     )
}



export default Stocks