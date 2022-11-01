import React from "react";
import { Link } from "react-router-dom";

const logopath = "media/icons8-w-67.png"



function SideBar(){
     return(
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
               <Link to="/"><img className="sidebar-icon" id="homebutton-icon" src={logopath} alt="icon"></img></Link>

               <button type="button" className="btn btn-secondary" id="btn-profile">Profile</button>
               <br/>
               <button type="button" className="btn btn-secondary" id="btn-wallet">Wallet</button>
               <br/>
               <button type="button" className="btn btn-secondary" id="btn-stocks">Stocks</button>
               <br/>
               <Link to="/Portfolio"><button type="button" className="btn btn-secondary" id="btn-portfolio">Portfolio</button></Link>
          </div>
     );
}

export default SideBar;