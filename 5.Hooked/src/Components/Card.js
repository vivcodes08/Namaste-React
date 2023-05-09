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

export default Card;