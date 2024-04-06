import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { delUser } from "../auth/userSlice.js"
import { useNavigate } from 'react-router-dom';

function Logg() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    
    const moveTOP = () => {        
        navigate('/profile')
    }

    const handleLogOut = () => {
        localStorage.setItem('USER',null)   
        dispatch(delUser())
    }

    return ( 
        <div className="nav__loggs__container">
            <IconContext.Provider value={{ color: "white", className: "icon__provider" }}>
                    <HiOutlineLogout className='iconprofile' onClick={() => handleLogOut()}/>                    
            </IconContext.Provider>


            <IconContext.Provider value={{ color: "white", className: "icon__provider" }}>
                    <CgProfile className='iconprofile' onClick={() => moveTOP()}/>
            </IconContext.Provider>                            
        </div>
     );
}

export default Logg;