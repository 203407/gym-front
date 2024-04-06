
import { IconContext } from "react-icons";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineUserAdd } from "react-icons/hi";
import {useNavigate} from 'react-router-dom'


function NotLogg() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {
    navigate('/register')
  }

    return (
        <div className="nav__loggs__container">
            <IconContext.Provider value={{ color: "white", className: "icon__provider" }}>
              <HiOutlineLogin  className='iconprofile' onClick={() => handleLogin()}/>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "white", className: "icon__provider" }}>
              <HiOutlineUserAdd  className='iconprofile' onClick={() => handleSignup()}/>
            </IconContext.Provider>  

        </div>
      );
}

export default NotLogg;