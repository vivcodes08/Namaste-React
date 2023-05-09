import React from "react";
import  ReactDOM  from "react-dom/client";
import data from "./data"

/**
 * Header
 *  1. Logo
 *  2.Nav Items
 * Body
 *  1.Search 
 *  2.container
 *  3.cards
 * 
 * Footer
 */


//! ---Heading Componet--------------

const Heading=()=>{
    return(
        <>
        <div className='header'>
            <img className='logo' alt='produc-logo' src="https://img.freepik.com/premium-vector/burger-logo-vector-art-design_260747-248.jpg?w=740"/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>My Profile</li>
                    
                </ul>
            </div>
        </div>
        </>
    )

}


//!--Search Bar Component --------------------------------

const SearchBar=()=>{
    return(
        <>
        <div className="search-bar">
            <input className="search" type="text" placeholder="Search"/>
            <button type="submit">🔍</button>
            </div>
        </>
    )
}


//!----Card Component --------------------------------

const Card=(props)=>{
    return(
        <>
        <div className="card">
            <img className="resturant-image" src={props.image}/>
            <h3>{props.name}</h3>
            <h5>{props.deliveryTime} ⌛</h5>
            <h5>North-Indian, Dal Batti 😋</h5>
        </div>
        </>
    )
}



//!-- BodyComponent --------------------------------

const BodyComponent=()=>{
    return(
        <>
        <div className="body">
        <SearchBar/>
        <div className="container">
            {
                data.map(index=>{
                    return(
                       <Card
                        key={index.info.resId} 
                        name={index.info.name} 
                        image={index.info.o2FeaturedImage.url}
                        deliveryTime={index.order.deliveryTime}
                        />  
                    )
                })
            }
        </div>
        </div>
        
        </>
    )
}


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

