import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import SectionRutine from "../calorias/SectionRutine";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import AddSection from "./AddSection";
import toast, {Toaster} from 'react-hot-toast'


function Rutine() {
    const [rutinas,setRutinas] = useState([])
    const [show,setShow] = useState(false)
    const token = useSelector((state) =>state.user.token )    
    
    const [change,setChange] = useState(0)


    useEffect(() =>{
        axios.get(import.meta.env.VITE_APIHOST+'/rutine/byuser', 
        {headers : {
            'Authorization': `Bearer ${token}`   
        }})
        .then(response => {                                                
            setRutinas(response.data)            
        })
        .catch(error => {        
        });
        console.log(change)
    },[change])

    const handleShow =()=>{
        setShow(!show)
    }

    const showToast = () => {
        toast.success("Creado correctamente",{duration:1000})
    }

    return (  
        <div className="main__container__both">
         <Toaster
                position="top-center"
                reverseOrder={false}            
        />


            <h1 className="ll">Rutinas</h1>
        {

            rutinas.length < 3 ?  (<div className="add__container">        
                <IconContext.Provider value={{ color: "white", className: "icon__provider__profile" }}>
                        <IoIosAddCircleOutline  className="icon__add" onClick={() => handleShow()}/>
            </IconContext.Provider>        
        </div> )
        : 

        <h1 onClick={() => console.log(rutinas.length)}>Alcanzaste el limite de 3</h1>

        }

        




        <AddSection show={show} change= { () => {setChange(change+1)}}  hdshow ={ ()=> setShow(false)} toast={ () => showToast()}/>        


        { 
           rutinas.length > 0 ?  rutinas.map( rutina => (
                <SectionRutine id={rutina.rutine.id} key={rutina.rutine.id} rutinaname={rutina.rutine.namerutina} name={rutina.rutine.nameuser}  exercices={rutina.exercices}/>                
            ))
            : <h1 className="out__rutines">Sin rutinas</h1>
        }           

            
        </div> 


    );
}

export default Rutine;