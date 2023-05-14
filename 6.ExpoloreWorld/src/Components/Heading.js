import { LOGO_URL } from "../utils/constants"

const Heading=()=>{
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
        </div>
        </>
    )

}

export default Heading

