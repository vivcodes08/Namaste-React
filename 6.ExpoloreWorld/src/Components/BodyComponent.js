import Card from './Card'
import data from '../utils/data'
import { useEffect, useState } from 'react'
import SearchBar from "./SearchBar"
const BodyComponent=()=>{

   //!- useState

    const [resturantlist,setResturantList]=useState([])
    console.log(resturantlist)


    //!--getTopResturant based on Ratings

    const getTopResturant=()=>{
        newResturantlist=resturantlist.filter(resturant=>parseFloat(resturant.data.avgRating)>4)
        setResturantList(newResturantlist)
    }

    // ^1.-- Every Time when the state changes or componet re-renders
    useEffect(()=>{
        console.log("useEffect Render with no dependics❌")
    })

    // ^2. After providing it DEPENDENCIES ARRAY it is called only first time
    useEffect(()=>{
            console.log("useEffect Render with dependics ✔️")
            fetchResturantsData()
        },[])
    
    // ^3, After providing it DEPENDENCIES which is assocaited with state changes

    useEffect(()=>{
        console.log("useEffect ResturantList change Render")
    },[resturantlist])

    console.log("-------------------MAIN RENDER------------")


    const fetchResturantsData = async()=>{

        let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING')
        let result=await data.json()
        console.log(result.data.cards[2].data.data.cards)
        setResturantList(result?.data?.cards[2]?.data?.data?.cards)

    }

    return(
        <>
        <div className="body">
        <SearchBar/>
        <button onClick={getTopResturant}>Top Restraunt🍽️ </button>
        <div className="container">
           
            {
                resturantlist.map(index=>{
                    return(
                       <Card
                        key={index.data.id} 
                        name={index.data.name} 
                        image={index.data.cloudinaryImageId}
                        deliveryTime={index.data.sla.deliveryTime}
                        ratings={parseFloat(index.data.avgRating)}
                        />  
                    )
                })
            }
        </div>
        </div>
        
        </>
    )
}

export  default BodyComponent