import React from "react";
import  ReactDOM  from "react-dom/client";
import Heading from "./Components/Heading"
import BodyComponent from "./Components/BodyComponent";

const Applaylout=()=>{
    return(
        <>
        <Heading/>
        <BodyComponent/>
        </>
    )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applaylout />)

