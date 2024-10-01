import React ,{useState , useEffect}from "react";
import { useParams } from "react-router-dom";
 import Skeleton1 from "./Skeleton";
import {MENU_URL} from "../utils/constants"
import useResturantMenu from '../utils/useResturantMenu'




const AboutRes=(props)=>{
    const params=useParams();
    const id=params.id;



    const resDeatils=useResturantMenu(id);

    if(resDeatils == null) return <Skeleton1/>

    

    

   
    return(
        <>
            <h1 className="">About Resturant {props.name}</h1>
            {
               Object.keys(resDeatils).length == 0 ? <Skeleton1/> : 
                <div>
                    <h1>Resturant Name :- {resDeatils.name}</h1>
                    <h1>Id:- {resDeatils.id}</h1>
                    <h3>City:- {resDeatils.city}</h3>
                    <h4>Average Rating:- {resDeatils.avgRating}</h4>
                    <h4>Cuisines :- {resDeatils.cuisines.toString()}</h4>
                </div>
            }
            </>
    )
}



export default AboutRes;