const Card=(props)=>{
    return(
        <>
        <div className="card">
            <img className="resturant-image" src={props.image}/>
            <h4>{props.name}</h4>
            <div className="inner_card">
            <span>{props.deliveryTime} ⌛</span>
            <span>⭐{props.ratings}</span>
            <span>North-Indian, Dal Batti 😋</span>
            </div>
            
        </div>
        </>
    )
}

export default Card;