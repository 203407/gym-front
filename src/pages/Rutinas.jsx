import '../assets/css/rutine.css'

import Nav from '../components/home/Nav';
import Footer from '../components/home/Footer'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";
import SectionRutine from '../components/calorias/SectionRutine';

function Rutinas() {
    const token = useSelector((state) =>state.user.token )        
    const  [rutinas,setRutinas] = useState([])
            
     useEffect(  ()  => {            

         axios.get(import.meta.env.VITE_APIHOST+'/rutine', 
        {headers : {
            'Authorization': `Bearer ${token}`   
        }})
        .then(response => {                                                
            setRutinas(response.data)            
        })
        .catch(error => {        
        });
    },[])
    


    return ( 
        <div className="rutinas">
        <Nav pag={2}/>
  
        <div className='card__rutinas rutinas__expand'>
            <h1 className='titlte__rutinas'>Rutinas de usuarios</h1>
        </div>
       
        { 
            rutinas.map( rutina => (
                <SectionRutine id={rutina.rutine.id} key={rutina.rutine.id} rutinaname={rutina.rutine.namerutina} name={rutina.rutine.nameuser}  exercices={rutina.exercices}/>                
            ))
        }   

        {
            rutinas.length > 0 ? <Footer/> :null
        }
        
        
    </div>
);
}

export default Rutinas;