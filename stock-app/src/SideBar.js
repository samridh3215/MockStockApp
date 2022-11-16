import React from "react";
import { Link } from "react-router-dom";

const logopath = "media\icons8-w-67.jpg"



function SideBar(){
     return(
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
               <Link to="/"><button type="button" className="btn btn-secondary" id="btn-home">Home</button></Link>
               <br/>
               <button type="button" className="btn btn-secondary" id="btn-profile">Profile</button>
               <br/>
               <button type="button" className="btn btn-secondary" id="btn-wallet">Wallet</button>
               <br/>
               <Link to="/Stocks"><button type="button" className="btn btn-secondary" id="btn-stocks">Stocks</button></Link>
               <br/>
               <Link to="/Portfolio"><button type="button" className="btn btn-secondary" id="btn-portfolio">Portfolio</button></Link>
               <br/>
          </div>
     );
}

export default SideBar;