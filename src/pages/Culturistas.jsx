import Nav from '../components/home/Nav';
import '../assets/css/culturistas.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardCulturista from '../components/culturistas/CardCulturista';

import Footer from '../components/home/Footer';

import { checkToken } from '../checkToken/checkToken';
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import Loader from '../components/Loader/Loader';


function Culturistas() {

    const user = useSelector((state) =>state.user )
    const [culturistas,setCulturistas] = useState([])
    const [logg,setLogg] = useState(false)    
    const dispatch = useDispatch()
    const [loading,setLoading]   = useState(true)


    const getCulturistas = async (tipo) => {

        const headers = {
            headers : tipo
        }

        await axios.get(import.meta.env.VITE_APIHOST+'/culturist', 
        headers)
        .then(response => {                          
            setCulturistas(response.data)   
            setTimeout(()=> {
                setLoading(false)                
            }, 1000)  

        })
        .catch(error => {
    
        });
    }

    useEffect(()=>{        
        setLoading(true)           
        if( user.token !== ''){  

            const statusToken = checkToken(user.time,dispatch )
            
            if (statusToken){
                toast.error('La sesion ha caducado', {duration:1000})
                setLogg(false) 
            }else{
                const tipo =   {'Authorization': `Bearer ${user.token}`}
                setLogg(true)                                                            
                getCulturistas(tipo)
            }
            
        }
        else{       
            setLogg(false)     
            const tipo =   {'Authorization': `Bearer invitado`}
            getCulturistas(tipo)            
        }    
      

    },[user])

    return ( 
        <div className="">
            <Nav pag={3}  logg={logg}/>

            
            <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />


            <div className='card__culturistas'>
                <h1 className='titlte__culturistas'>Culturistas</h1>
            </div>
            
            {
                loading ? <Loader/>: (
                culturistas.map(element => (
                    <CardCulturista key={element.id} picture={element.picture} name={element.name}  nameuser={element.nameuser} weight={element.weight}  height={element.height} competitions={element.competitions}/>                                        
                )))

            }

            
        {
            loading ? null :  <Footer/> 
        }           
        </div>
     );
}

export default Culturistas;
