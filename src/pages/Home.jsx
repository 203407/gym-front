
import '../assets/css/home.css'
import Nav from '../components/home/Nav';
import Footer from '../components/home/Footer';
import H from '../assets/img/h.png'

import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { checkToken } from '../checkToken/checkToken.js';
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'

function Home() {
    const user = useSelector((state) =>state.user )        
    const [logg,setLogg] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {        
        if(user.token == ''){                             
            setLogg(false)
        }else{                                
            const statusToken = checkToken(user.time,dispatch)   
            
            if (statusToken){
                toast.error('La sesion ha caducado', {duration:1000})
                setLogg(false)        
            }else{
                setLogg(true)        
            }
            
                                        
                         
        }
    },[user])


    return ( 
        <div className="home__container">
             <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />


            <Nav pag={0} logg={logg} />
                <div className='container__home'>
                    <h1 className='title__home' >
                        Estamos para ayudarte <br/>
                        a ponerte más grande
                    </h1>

                    <img src={H} alt="home"  className='home__img'/>
                </div>                               
            <Footer st={1} />
        </div>
     );
}

export default Home;