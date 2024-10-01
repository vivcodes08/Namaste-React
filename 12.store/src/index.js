import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import Heading from "./Components/Header/Heading"
import BodyComponent from "./Components/BodyComponent";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import AboutMain from "./Components/Header/AboutMain";
import ResturantMenu from "./Components/ResturantMenu";
import AboutRes from "./Components/AboutRes";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



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
                path:"/resturantDetails/:id",
                element:<AboutRes/>
            },
            {
                path:"/home",
                element:<BodyComponent/>
            }
        ]

        
    }
])


console.log("Store🏪\n",appStore)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <Provider store={appStore}>
    <RouterProvider router={router}/>
    </Provider>
    
    </>

)

