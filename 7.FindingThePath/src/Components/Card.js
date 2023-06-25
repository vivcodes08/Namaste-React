const Card=(props)=>{
    return(
        <>
        <div className="card">
            <img className="resturant-image" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.image}`}/>
            <h4>{props.name}</h4>
            <div className="inner_card">
            <span>{props.deliveryTime} ⌛</span>
            <span>⭐{props.ratings}</span>
            <span id='cuisines'>😋{props.cuisines} </span>
            </div>
            
        </div>
        </>
    )
}

export default Card;