import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useCallback} from 'react';
import { MdDelete } from "react-icons/md";
import TableExercices from '../calorias/TableExercices';
import { FaRegSave } from "react-icons/fa";

import { useSelector } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import axios from 'axios';


import toast, {Toaster} from 'react-hot-toast'



import {useDropzone} from 'react-dropzone'


function AddCultu(props) {

    const token = useSelector((state) =>state.user.token )                   
    
    const [nombre,setNombre] = useState("")
    const [compe,setCompe] = useState('')
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')


    const [imagen,setImagen] = useState([])


    const onDrop = useCallback(acceptedFiles => {
        setImagen(acceptedFiles)   
      }, [])

    const {getRootProps, getInputProps, isDragActive,acceptedFiles} = useDropzone({onDrop, accept: {
        'image/png': ['.png'],        
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jfif'],
      },
      maxFiles:1})


    const handleName = (e) =>{
        setNombre(e.target.value)
    }
   
    const handleCompe = (e) =>{
        setCompe(e.target.value)        
    }

    const handlePeso = (e) =>{
        setPeso(e.target.value)
    }

    const handleAltura = (e) => {
        setAltura(e.target.value)
    }
    
    // const handleImage = (e) => {
    //     setImagen(e.target.files[0])
    // }




    
    const hanldeSubmit = async (e) =>{
        e.preventDefault();

        
        if (imagen[0] === undefined) {
            return toast.error("Se necesita una imagen", { duration: 1500 });   
        }

     
        const cultuSave = {
                filename: imagen[0],
                name:nombre,
                weight:peso,
                height:altura,
                competitions:compe
        }    
    
                                

       await axios.post('http://localhost:3000/culturist', cultuSave, {headers:{ 'Authorization': `Bearer ${token}`,
       'Content-Type': 'multipart/form-data'}})
            .then(response => {                            
                                

                props.toast()           
                setNombre('')
                setCompe('')
                setPeso('')
                setAltura('')
                setImagen([])                                
               

                setTimeout(()=>{   
                    props.hdshow()   
                    props.change()
                },1000)
              
            })
            .catch(error => {
                toast.error(error.response.data, { duration: 1500 });                  
                // console.log(error.response.data)
                // alert(error.response.data)
            });
    }



    const handleCancel = (e) =>{
        e.preventDefault();
        props.hdshow()    
        setNombre('')
        setCompe('')
        setPeso('')
        setAltura('')
        setImagen([])
        
    }

    return (  
        
        <div className={props.show ? "trueshow" : "notShow" }>

            <Toaster
                position="top-center"
                reverseOrder={false}            
            />
                                                  
                {/* <FaRegSave  className='save__icon__culrutist' onClick={() => hanldeSave()}/>    */}
               
        <form  onSubmit={hanldeSubmit}>
            <div className="inpust__section__containerv2">                                              

                    <div className='item__container'>
                        <span className="tittle__section"  >Nombre</span>
                        <input type="text" name="" id="" required className= "input__sectionv2" onChange={handleName} value={nombre} placeholder="Nombre"/>
                    </div>               


                    <div className='item__container'>
                        <span className="tittle__section"  >No. competiciones</span>
                        <input type="number" name="" id="" required className= "input__sectionv2" onChange={handleCompe} value={compe} placeholder="No. competiciones"/>
                    </div>          



                    <div className='item__container'>
                        <span className="tittle__section"  >Peso</span>
                        <input type="number" name="" id="" required className= "input__sectionv2" onChange={handlePeso} value={peso} placeholder="Peso"/>
                    </div>          



                    <div className='item__container'>
                        <span className="tittle__section"  >Estatura</span>
                        <input type="number" name="" id="" required className= "input__sectionv2" onChange={handleAltura} value={altura} placeholder="Estatura"/>
                    </div>          


                    {/* <div className='item__container'>
                        <span className="tittle__section"  >Seleccionar imagen</span>
                        <input type="file" name="" id="" className= "input__sectionv2" onChange={handleImage} />
                    </div>           */}

                    <div className= {imagen[0] === undefined ? 'dropzone' : ' dropzone change__drop'}  {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <p className='p__drop' >Pon tu archivo aqui ...</p> :
                            <p className='p__drop'>suelta o haz clic para seleccionar un archivo</p>
                        }
                    </div>

            </div>                                                                                                                                       

            <div className='cul__action__butons'>
            <button className='btn___add__culturist' onClick={(e) => handleCancel(e)} type='reset'>Cancelar </button>            
            <button  type="submit"  className='btn___add__culturist'  >Agregar</button>

            </div>


        </form>
               
        </div>
    );
}
export default AddCultu;