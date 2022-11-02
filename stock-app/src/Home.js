import React from "react";
import HomePageContainer from "./HomePageContainer";
import { getSymbols } from "./responsesFromAPI";
import SideBar from "./SideBar";



function Home() {
  var d = getSymbols();
  var sym = d[0];
  console.log(d);

  return (
    <div>
      <SideBar />
      <HomePageContainer/>
      
    </div>
  );
}

export default Home;
