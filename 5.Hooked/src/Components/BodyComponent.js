import Card from './Card'
import data from '../utils/data'

import SearchBar from "./SearchBar"
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

export  default BodyComponent