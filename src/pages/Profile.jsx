import { Outlet } from "react-router-dom";
import Nav from "../components/profile/Nav";

import '../assets/css/profile.css'
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile() {    
    const user = useSelector((state) =>state.user )    
    const [visi, setVisi] = useState(false)
    
    const handleVisi = () =>{      

        if(visi){            
            setVisi(false)
        }
    }
  
    useEffect(()=> {
            setVisi(true)
    },[])

    return (  
        <div> 
            <Nav change={handleVisi}/>
            
            <div className={visi ? "profile__container" : "disa" }>
                    <h1 className={visi  ? "ll" : "disa" }>
                        Bienvenido
                    </h1>
                    <h1 className={visi  ? "ll" : "disa" }> {user.username}</h1>            
            </div>            

            <Outlet></Outlet>
        </div>
    );
}

export default Profile;