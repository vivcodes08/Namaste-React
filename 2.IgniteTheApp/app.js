import React from "react"
import ReactDOM from "react-dom/client" 
/**
 *^ AIM :- To create React App Using basic
 */




//! Creating a basic Element using React
/**
 * ~ React Element is a Javascript Object
 */
const element=React.createElement("h1",{
    id:"heading",
    xyz:"Vivek"
},"Hello WOrld from Nasmte React🙏")

console.log(element) //~ React Element 
        
        
//! Creating a Root Element using ReactDOM
const root=ReactDOM.createRoot(document.getElementById("root"))


//! root element created by DOM will render every other element
root.render(element)