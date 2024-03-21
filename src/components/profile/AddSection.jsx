import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import TableExercices from '../calorias/TableExercices';
import { FaRegSave } from "react-icons/fa";

import { useSelector } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import axios from 'axios';

import toast, {Toaster} from 'react-hot-toast'



function AddSection(props) {
    const token = useSelector((state) =>state.user.token )   

    const [ejercicios, setEjercicios] = useState([]);
    const [open, setOpen] = useState(false);    
    const [sections,setSections] = useState([])
    const [nameRutine,setNameRutine] = useState('')    



    const handleNameRutine = (e) =>{
        setNameRutine(e.target.value)
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };    

    const convertirArrayAJSON = (arr) => {
        const json = {};
        for (let i = 0; i < arr.length; i += 2) {
          json[arr[i]] = arr[i + 1];
        }
        return json;
      };

      

    const handleSubtmit = (event) =>{
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        const dia = formJson.Dia;
        const musculo = formJson.Musculo;                
        handleClose();
        
        const json = convertirArrayAJSON(ejercicios);

        const newSection = {
            "dia":dia,
            "muscle":musculo,
            "ejercicios":json
        }

        setSections([...sections, newSection])        
        setEjercicios([])
    }


    const agregarInput = () => {
        setEjercicios([...ejercicios, '']);
      };
    
      const handleChange = (index, event) => {
        const newInputs = [...ejercicios];
        newInputs[index] = event.target.value;
        setEjercicios(newInputs);
      };

      const eliminarInput = (index) => {
        const newInputs = [...ejercicios];
        newInputs.splice(index, 2); 
        setEjercicios(newInputs);
      };
    
    
    const hanldeSave = async () =>{

        const rutinaToSave  = {
            namerutina:nameRutine,
            sectionrutines:sections
        }        

        if (sections.length === 0 && nameRutine === '' ){
            return   toast.error("agregue una seccion y nombre a su rutina",{duration:2000})
        }else if (sections.length === 0 && nameRutine !== '' ){
            return   toast.error("agregue una seccion su rutina",{duration:2000})
        }else if (sections.length > 0 && nameRutine === '' ){
            return   toast.error("agregue un nombre su rutina",{duration:2000})
        }
        
        
            await axios.post(import.meta.env.VITE_APIHOST+'/rutine',rutinaToSave,
            {headers : {
                'Authorization': `Bearer ${token}`   
            }})
            .then(response => {                                                                                             
                props.toast()
                setEjercicios([])
                setOpen(false)
                setSections([])
                setNameRutine('')
                                      
                setTimeout(()=>{   
                    props.change()
                    props.hdshow()    
                    
                },1500)
                


            })
            .catch(error => {            
                console.log(error.response.data)           
            });       




    }

    return (  
        
        <div className={props.show ? "trueshow" : "notShow" }>

                <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />
           

                <div className="inpust__section__container">                    
                    <span className="tittle__section"  >Nombre de la rutina</span>
                    <input type="text" name="" id="" className= "input__section" onChange={handleNameRutine} value={nameRutine} placeholder="Nombre"/>
                </div>                
                             
                <Dialog
                    open={open}
                    onClose={handleClose}
                    
                    PaperProps={{
                    component: 'form',
                    onSubmit: handleSubtmit
                    }}
                >
                    <DialogTitle className='dialog__ruine'>Crear rutina</DialogTitle>
                    <DialogContent className='dialog__ruine'>                

                    <div className='first__data__container'>                        
                        <input  id="Dia"
                            name="Dia"                        
                            type="text" 
                            className='textfield'
                            required
                            placeholder='Dia'
                            />                        
                        <input  id="Musculo"
                            name="Musculo"                        
                            type="text" 
                            className='textfield'
                            required
                            placeholder='Musculo'
                            />
                    </div>                                                        

                    <div className="modifi__add" >
                        <IconContext.Provider value={{ color: "white", className:"modifi__add__provider"}}>
                            <IoIosAddCircleOutline  className="icon__add" onClick={() => agregarInput()}/>
                        </IconContext.Provider>   
                    </div>
                    

                    <div className='input__container'>
                    
                    {
                        ejercicios.length > 0 ? 
                        <div className='title__container__dialog'>
                        <span>Nombre</span>
                        <span>Repeticiones</span>                        
                        </div>
                        : null

                    }
                    

                    {ejercicios.map((value, index) => {
                    if (index % 2 === 0) {                    
                        return (
                            <div key={index} className='inputs__creates'>
                            <input
                                type="text"
                                value={ejercicios[index]}
                                onChange={(event) => handleChange(index, event)}                                
                                required
                                className='input__ejercices'
                            />
                            <input
                                type='number'
                                value={ejercicios[index + 1]}
                                onChange={(event) => handleChange(index + 1, event)}                                
                                required
                                className='input__ejercices'
                            />                            
                            <MdDelete  onClick={() => eliminarInput(index)}/>
                            </div>
                        );
                    }
                        return null;
                    })}



                    </div>                                        
                    
                    </DialogContent>
                        <div className='dialog__ruine__buttons'>
                            <button className='bt__actions' onClick={handleClose}>Cancel</button>
                            <button className='bt__actions' type="submit" disabled={ ejercicios.length > 0 ?  false : true   } >Guardar</button>
                        </div>
                    </Dialog>
                
                <div className='actions'>

                    <span className="add__section" onClick={handleClickOpen} >Agregar seccion</span>        

                    <FaRegSave  className='save__icon' onClick={() => hanldeSave()}/>   

                </div>                                                
                
            {
                sections.length > 0 ?
                sections.map(element => (
                    <TableExercices key={element+"asdasd"} id={element} dia={element.dia} muscle={element.muscle} ejercicios={element.ejercicios} />
                ))
                : null
            }
            
                
        </div>
    );
}

export default AddSection;  