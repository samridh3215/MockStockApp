import React, { useEffect, useState } from "react";
import HomePageContainer from "./HomePageContainer";
import { getGainers, getSymbols, getLosers } from "./responsesFromAPI";
import SideBar from "./SideBar";

function useFunction(callback){
  const [state, setState] = useState([])
  useEffect(() => {
    callback().then(r => setState(r))
  }, [])
  return state
}


function Home() {

  return (
    <div>
      <h1 className="page-info">Stocks at a glance</h1>
      <SideBar />
      <HomePageContainer/>

    </div>
  );
}

export {Home, useFunction}
