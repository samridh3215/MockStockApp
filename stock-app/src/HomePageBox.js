import React from "react";
import { NavItem } from "react-bootstrap";

function HomePageBox(props){
     var stock_url = "https://finance.yahoo.com/quote/"+props.symbol+"?p="+props.symbol
     return(
               <div className="box">
                    <p className="company-name">{props.companyName}</p>
                    <p className="stock-symbol">Stock- {props.symbol}</p>
                    <p className="stock-price">Price - {props.price}</p>
                    <p className="stock-info">{props.change}</p>
                    
                    <a href={stock_url} target="_blank">View More</a>
               </div>
     );
}

export default HomePageBox