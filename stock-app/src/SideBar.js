import React from "react";

function SideBar(){
     return(
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
               <img className="sidebar-icon" id="homebutton-icon" src="media/icons8-w-67.png" alt="icon"></img>
               <button type="button" className="btn btn-secondary">Profile</button>
               <br/>
               <button type="button" className="btn btn-secondary">Wallet</button>
               <br/>
               <button type="button" className="btn btn-secondary">Stocks</button>
               <br/>
               <button type="button" className="btn btn-secondary">Portfolio</button>
          </div>
     );
}

export default SideBar;