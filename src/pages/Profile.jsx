import { Outlet } from "react-router-dom";
import Nav from "../components/profile/Nav";

import '../assets/css/profile.css'
import {  useState } from "react";
import { useSelector } from "react-redux";

function Profile() {    
    const user = useSelector((state) =>state.user.user )    
    const [visi, setVisi] = useState(true)
    
    const handleVisi = () =>{      

        if(visi){            
            setVisi(false)
        }
    }
  

    return (  
        <div> 
            <Nav change={handleVisi}/>
            
            <div className={visi ? "profile__container" : "disa" }>
                    <h1 className="ll">
                        Bienvenido
                    </h1>
                    <h1 className="ll"> {user.username}</h1>            
            </div>            

            <Outlet></Outlet>
        </div>
    );
}

export default Profile;