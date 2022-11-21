import React, { useEffect, useState } from "react";

import HomePageContainer from "./HomePageContainer";
import SideBar from "./SideBar";

function useFunction(callback){
  const [state, setState] = useState([])
  useEffect(() => {
    callback().then(r => setState(r))
  }, [])
  return state
}

async function sendUserDetails(){
  const user = localStorage.getItem("userData")
  const userJSON = JSON.parse(user)
  const url = `http://localhost:8080/api/update/${userJSON.email}`;
  const response  = await fetch(url);
  if(!response.ok) console.log(response.statusText)
  let userName = response.json()
} 


function Home() {
  const user = localStorage.getItem("userData")
  const userJSON = JSON.parse(user)
  sendUserDetails()        
  return (
    <div className="home-div">
      <h1 className="page-info">Stocks at a glance </h1>
      <SideBar />
      <HomePageContainer/>
      <h6>(logged in as {userJSON.email})</h6>
    </div>
  );
}

export {Home, useFunction}
