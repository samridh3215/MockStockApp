import React from "react";
import { Link } from "react-router-dom";

const logopath = "media\icons8-w-67.jpg"

const handleLogout = () => {
     localStorage.removeItem("token");
};

function SideBar(){
     return(
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
               <Link to="/Home"><button type="button" className="sidebar-btn btn btn-secondary" id="btn-home">Home</button></Link>
               <br/>
               {/* <Link to ="/Wallet">
               <button type="button" className="sidebar-btn btn btn-secondary" id="btn-wallet">Wallet</button>
               </Link>
               <br/> */}
               <Link to="/Stocks"><button type="button" className="sidebar-btn btn btn-secondary" id="btn-stocks">Stocks</button></Link>
               <br/>
               <Link to="/Portfolio"><button type="button" className="sidebar-btn btn btn-secondary" id="btn-portfolio">Portfolio</button></Link>
               <br/>
               <Link to="/"><button type="button" className="sidebar-btn btn btn-secondary" id="btn-logout" onClick={handleLogout}>Log out</button></Link>
          </div>
     );
}

export default SideBar;