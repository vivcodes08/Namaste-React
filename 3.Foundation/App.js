import React from 'react';
import ReactDOM  from 'react-dom/client';


const heading=React.createElement("h1",{id:"heading"},"Welcome to the Foundation 🙏NamasteReact🙏")
console.log(heading)

const root=ReactDOM.createRoot(document.getElementById("root"));


//! JSX :- A special type of HTML like syntax
//! This JSX is also a React Object
const jsxheadings=(
    <h1 className='heading' tabIndex={1}>
    Hello World From JSX 🙏NamasteReact🙏
    </h1>
    )
console.log("JSX ")
console.log(jsxheadings)


//-------------------------------------------------------------
//~ React functional componets-------
//! React FC always starts with Capital letter
// ! React FC always returns JSX or React Element

const Title=()=>{
    return <h1 className='title'>Title:- 🙏NamasteReact🙏:- Vivek Sa</h1>
}




const Heading2=()=><h1>🙏NamasteReact🙏 from functional componets</h1>

const Heading3=()=>{
  <h1>🙏NamasteReact🙏from React functional componets</h1>
}

//^ All are same function
//----------------------------------------------------------

//! Note:- To use multiple lines if JSX in a variable use the () bracess

const name=(
    <span>
        😎My Name is Vivek ~ used  to load the variablly stored JSX😎
    </span>
)

console.log("Name ReactElement\n",name)

//&---Different ways to call a React functional component

/**
 * ! 1. <Heading />
 * ! 2. <Heading></Heading>
 * ! 3. {Heading()} // Just call the function inside the JSX using circular brackets
 */


//----------------------------------------------------
//! Example Compoent inside the component is called component composition
const number=10000
const Heading=()=>{
    return <div> 
    {number*2 }
    {console.log("Vivek is Great")}
    <h2>{name}</h2>
    <Title/>
    <h1>🙏NamasteReact🙏from React functional componets</h1>
    </div>
}

// root.render(heading)
// root.render(jsxheadings)

//! Rendering the functional Component
root.render(<Heading/>)