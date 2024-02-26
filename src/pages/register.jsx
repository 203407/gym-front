
// import { useSelector } from "react-redux";


import '../assets/css/login-register.css'
import wave from '../assets/img/wave.svg'
import RegisterForm from "../components/register/RegisterForm";

import { Link } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {

    // const user = useSelector((state) =>state.user )


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
            
            await axios.post('http://localhost:3000/user', data)
            .then(response => {                                     
                toast("Creado correctamente",{duration:500})

                setTimeout(()=>{
                    navigate('/')
                },2000)
                

            })
            .catch(error => {
              toast.error(error.response.data, { duration: 1500 });               
            });


            console.log(name,email,pass)
        }
    }

    return (  

        <div className="container">

            <Toaster
                position="top-center"
                reverseOrder={false}            
            />

            <div className="card">
            <h1 className="tittle">Registro</h1>
            <RegisterForm send={sendRequest} handlechangename={handlechangename} 
            handlechangeemail={handlechangeemail}
            handlechangepassword={handlechangepassword}
            />

            <div className='container__message__back'>
                <Link className='login__back' to={'/'}>Regresar al login</Link>
            </div>
            </div>

            
            {/* <h1>Register</h1>
            <h1>username: {user.username}</h1>
            <h1>token: {user.token}</h1>
            <h1>id: {user.id}</h1> */}

            
            <img src={wave} alt=""  className='wave'/>
        </div>

    );
}

export default Register;