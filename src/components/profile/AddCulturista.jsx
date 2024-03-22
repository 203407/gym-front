import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import CardCulturista from "../culturistas/CardCulturista";
import toast, {Toaster} from 'react-hot-toast'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import AddCultu from "./AddCultu";


function AddCulturista() {

    const [culrutista,setCulturistas] = useState([])
    const [change,setChange] = useState(0)
    const token = useSelector((state) =>state.user.token ) 
    const [show,setShow] = useState(false)


    useEffect(() =>{
        axios.get(import.meta.env.VITE_APIHOST+'/culturist/byuser', 
        {headers : {
            'Authorization': `Bearer ${token}`   
        }})
        .then(response => {                                                
            setCulturistas(response.data)                        

        })
        .catch(error => {        
        });        
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

                <h1 className="ll__cultursitas">Culturistas</h1>


            {
                 culrutista.length < 3 ? (<div className="add__container">        
                 <IconContext.Provider value={{ color: "white", className: "icon__provider__profile" }}>
                         <IoIosAddCircleOutline  className="icon__add" onClick={() => handleShow()}/>
                 </IconContext.Provider>        
             </div>) 
             :
             <h1  >Alcanzaste el limite de 3</h1>
            }
            
            

            <AddCultu show={show} change= { () => {setChange(change+1)}}  hdshow ={ ()=> setShow(false)} toast={ () => showToast()}/>        

                <div>

                
            {

                culrutista.length > 0 ? culrutista.map(element => (
                    <CardCulturista key={element.id} picture={element.picture} name={element.name}  nameuser={element.nameuser} weight={element.weight}  height={element.height} competitions={element.competitions}/>                    
                ))
                :
                <h1 className="out__rutines">  Sin culturistas</h1>
            }

                </div>
        </div>
     );
}

export default AddCulturista;