import React from "react";
import { buy, sell } from "./Stocks";

function HomePageBox(props){
     var stock_url = "https://finance.yahoo.com/quote/"+props.symbol+"?p="+props.symbol
     return(
               <div className="box">
                    <p className="company-name">{props.companyName}</p>
                    <p className="stock-symbol">Stock- {props.symbol}</p>
                    <p className="stock-price">Price - {props.price}</p>
                    <p className="stock-info">{props.change}</p>
                    <button style={{marginRight:"20px"}} className="buy btn-outline-success" onDoubleClick={buy(props.symbol, props.price)}>Buy</button>
                    <button className="sell btn-outline-danger" onDoubleClick={sell(props.symbol, props.price)}>Sell</button>
                    <br></br>
                    <a href={stock_url} target="_blank">View More</a>
               </div>
     );
}

export default HomePageBox