import Card from './Card'
import data from '../utils/data'
import { useEffect, useState } from 'react'
import SearchBar from "./SearchBar"
import Skeleton1 from "./Skeleton"
import useStatusOnline from '../utils/useStatusOnline'

const BodyComponent=()=>{

   //!- useState

    const [resturantlist,setResturantList]=useState([])
    const [filterReslist,setResFilterList]=useState([])
    const [searchText,setSearchText]=useState("")
    console.log(resturantlist)


    //!--getTopResturant based on Ratings

    const getTopResturant=()=>{
        newResturantlist=resturantlist.filter(resturant=>parseFloat(resturant.data.avgRating)>4)
        setResFilterList(newResturantlist)
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
        setResFilterList(result?.data?.cards[2]?.data?.data?.cards)

    }


//!-------Searches Resturant using search Text Function
const searchResturant=()=>{
    let filterResList=resturantlist.filter(resturstant=>(resturstant.data.name).toLocaleLowerCase().includes(searchText))
    setResFilterList(filterResList)
    
}

const removeAllFilterList=()=>{
    setResFilterList(resturantlist)
}

const onlineStatus=useStatusOnline();

if(onlineStatus == false){
    return(
        <h1> Looking Like You Are Offline 🚫</h1>
    )
}


    return(
        <>
        <div className="body bg-red-800">
        <div className="search-bar">
            <input 
                className="search"
                type="text"
                placeholder="Search"
                onChange={(e)=>{
                    console.log(e.target.value)
                    setSearchText((e.target.value).toLocaleLowerCase())
                }}
              />
            <button type="submit" onClick={searchResturant}>🔍</button>
            <button onClick={removeAllFilterList}>🔄️</button>
        </div>
      
        <button onClick={getTopResturant}>Top Restraunt🍽️ </button>
       
        
        
        <div className="container">
           
            {
                filterReslist.length <0 ? <Skeleton1/>:

                filterReslist.map(index=>{
                    return(
                       <Card
                        key={index.data.id}
                        id={index.data.id} 
                        name={index.data.name} 
                        image={index.data.cloudinaryImageId}
                        deliveryTime={index.data.sla.deliveryTime}
                        ratings={parseFloat(index.data.avgRating)}
                        cuisines={index.data.cuisines.join(",")}
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