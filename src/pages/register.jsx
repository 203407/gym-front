

import '../assets/css/register.css'
import wave from '../assets/img/wave.svg'
import RegisterForm from "../components/register/RegisterForm";

import { Link } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {


    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const navigate = useNavigate()

    const handlechangename = (e) =>{
        setName(e.target.value)
    }

    const handlechangeemail = (e) =>{
        setEmail(e.target.value)
    }

    const handlechangepassword = (e) =>{
        setPass(e.target.value)
    }


    const sendRequest = async (e) =>{
        e.preventDefault();
        
        if (email === '' || pass === '' || name === ''){
            toast.error("Completa todos los campos " ,{duration: 1500,})
        }else{                        

            const data = {email:email,password:pass,name:name}
            
            await axios.post(import.meta.env.VITE_APIHOST+'/user', data)
            .then(response => {                                     
                toast.success("Creado correctamente",{duration:500})

                setTimeout(()=>{
                    navigate('/')
                },2000)
                

            })
            .catch(error => {
              toast.error(error.response.data, { duration: 1500 });               
            });
        
        }
    }

    return (  
        <>
               
            <div className="register__container">

                <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />

                <div className="register__card">
                    <h1 className="register__tittle">Registro</h1>
                    <RegisterForm send={sendRequest} handlechangename={handlechangename} 
                    handlechangeemail={handlechangeemail}
                    handlechangepassword={handlechangepassword}
                    />

                <div className='register__container__message__back'>
                    <Link className='login__back' to={'/'}>Regresar al login</Link>
                </div>
                </div>
            </div>
            <img src={wave} alt=""  className='wave'/>
      
            </>
    );
}

export default Register;