import '../assets/css/rutine.css'

import Nav from '../components/home/Nav';
import Footer from '../components/home/Footer'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";
import SectionRutine from '../components/calorias/SectionRutine';
import { checkToken } from '../checkToken/checkToken';
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'
import Loader from '../components/Loader/Loader';


function Rutinas() {
    const user = useSelector((state) =>state.user )        
    const  [rutinas,setRutinas] = useState([])    
    const [logg,setLogg] = useState(false)  
    const [loading,setLoading]   = useState(true)
    const dispatch = useDispatch()

    const getRutinas = async (tipo) => {
                
        const headers = {
            headers : tipo
        }


        await axios.get(import.meta.env.VITE_APIHOST+'/rutine', 
        headers)
        .then(response => {                                                
            setRutinas(response.data)         

            setTimeout(()=> {
                setLoading(false)                
            }, 1000)   
        })
        .catch(error => {        
        });
    }

     useEffect(  ()  => {                 
        setLoading(true)
        if( user.token !== ''){  

            const statusToken = checkToken(user.time,dispatch )
            
            if (statusToken){
                toast.error('La sesion ha caducado', {duration:1000})
                setLogg(false)                                                  
            }else{
                setLogg(true)                                                  
                const tipo =   {'Authorization': `Bearer ${user.token}`}
                getRutinas(tipo)
            }                       
        }
        else{       
            setLogg(false)     
            const tipo =   {'Authorization': `Bearer invitado`}
            getRutinas(tipo)            
        }    

        
    },[user])
    

    return ( 
        <div className="rutinas">
        <Nav pag={2} logg={logg}/>
        

        <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />


        <div className='card__rutinas rutinas__expand'>
            <h1 className='titlte__rutinas'>Rutinas de usuarios</h1>
        </div>
       
         
        {   
            loading ? <Loader/> : (
            rutinas.map( rutina => (
                <SectionRutine id={rutina.rutine.id} key={rutina.rutine.id} rutinaname={rutina.rutine.namerutina} name={rutina.rutine.nameuser}  exercices={rutina.exercices}/>                
            )) )
        }   

        {
             
             loading  ? null :<Footer/>
        }
        
        
    </div>
);
}

export default Rutinas;