import React from "react";
import ListOfContributers from "../components/contributers/listOfContributers";
import Header from "../components/header/header";

export default function Contributers() {
  return(
    <>  
      <Header />
      <div className="container">
        <ListOfContributers />
      </div>
    </>
  )
}