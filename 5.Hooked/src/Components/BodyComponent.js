import Card from './Card'
import data from '../utils/data'
import { useState } from 'react'
import SearchBar from "./SearchBar"
const BodyComponent=()=>{

   //!- useState

    const [resturantlist,setResturantList]=useState(data)
    console.log(resturantlist)


    //!--getTopResturant based on Ratings

    const getTopResturant=()=>{
        newResturantlist=resturantlist.filter(resturant=>parseFloat(resturant.info.rating.aggregate_rating)>4)
        setResturantList(newResturantlist)
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
                        key={index.info.resId} 
                        name={index.info.name} 
                        image={index.info.o2FeaturedImage.url}
                        deliveryTime={index.order.deliveryTime}
                        ratings={parseFloat(index.info.rating.rating_text)}
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