import { Outlet } from "react-router-dom";
import Nav from "../components/profile/Nav";

import '../assets/css/profile.css'
import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkToken } from "../checkToken/checkToken";
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

function Profile() {    
    const user = useSelector((state) =>state.user )    
    const [visi, setVisi] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleVisi = () =>{      

        if(visi){            
            setVisi(false)
        }
    }
  
    useEffect(()=> {
            setVisi(true)            
            const statusToken = checkToken(user.time,dispatch)            
            
            if (statusToken){
                toast.error('La sesion ha caducado', {duration:1000})

                // setTimeout(()=> {
                //     navigate('/')
                // },1500)
            }

    },[])

    return (  
        <div> 
            <Nav change={handleVisi}/>

            <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />


            
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