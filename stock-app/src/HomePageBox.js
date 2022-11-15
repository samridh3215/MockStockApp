import React from "react";

function HomePageBox(props){
     return(
          <div>
               <div className="box">
                    <p className="company-name">{props.companyName}</p>
                    <p className="stock-info">{props.symbol}</p>
                    <p className="stock-info">{props.price}</p>
                    <p className="stock-info">{props.change}</p>
               </div>
          </div>
     );
}

export default HomePageBox