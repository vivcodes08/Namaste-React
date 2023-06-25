
import {useState} from "react"

import { LOGO_URL } from "../../utils/constants"
import LOGO from '../../assets/img/foodlogo.png'
import { Link } from"react-router-dom"
import useStatusOnline from "../../utils/useStatusOnline"
// import  { Link } from "react-router-dom"

const Heading=()=>{
    
    let [isLoggedIn,setIsLoggedIn]=useState(false)
    let onlineStatus=useStatusOnline();

    return(
        <>
        <div className='header'>
            <img className='logo' alt='produc-logo' src={LOGO}/>
            <div className="nav-items">
                <ul>
                    <span> Online Status :- {onlineStatus ? "🟢":"⚫"}</span>
                    <Link to='/home'>Home </Link>
                    <Link to='/about'>About</Link>
                    <Link to='/myprofile'>My Profile</Link>
                    
                  
        
                    
                </ul>
                
            </div>
            { (isLoggedIn) ? 
                (
                <button onClick={()=>setIsLoggedIn(false)}>LogOut ❌</button>
                ):
                (
                <button onClick={()=>setIsLoggedIn(true)}>LogIn ✔️</button>
                )
            }
        </div>
        </>
    )

}

export default Heading

