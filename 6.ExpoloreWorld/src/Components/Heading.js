
import {useState} from "react"

import { LOGO_URL } from "../utils/constants"

const Heading=()=>{
    
    let [isLoggedIn,setIsLoggedIn]=useState(false)

    return(
        <>
        <div className='header'>
            <img className='logo' alt='produc-logo' src={LOGO_URL}/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>My Profile</li>
                    
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

