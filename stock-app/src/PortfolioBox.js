import React from "react";

function PortfolioBox(props){
     return (
          <div className="portfolio-box">
               <p><strong>{props.companyName} </strong>({props.symbol})</p>
               <p>Current price - [{props.price}]</p>
          </div>
     );
}



export default PortfolioBox