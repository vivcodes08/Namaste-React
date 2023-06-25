import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import Heading from "./Components/Heading"
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import AboutMain from "./Components/AboutMain";
import ResturantMenu from "./Components/ResturantMenu";



const Applayout=()=>{
    return(
        <>
        <Heading/>
        <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<AboutMain/>
            },
            {
                path:"/resturant/:id",
                element:<ResturantMenu/>
            }
        ]

        
    }
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)

