import { useState } from 'react';

import '../assets/css/login-register.css'

import wave from '../assets/img/wave.svg'

import LoginForm from '../components/login/LoginForm';

import { Link } from "react-router-dom";

import toast, {Toaster} from 'react-hot-toast'

import axios from 'axios'


import { useDispatch } from 'react-redux';
import { addUser } from '../components/auth/userSlice.js';
import { useNavigate } from 'react-router-dom';



function Login() {

    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();    

    const handlechangeemail =  (e) =>{      
        setEmail(e.target.value)        
    }

    const handlechangepassword = (e) =>{        
        setPass(e.target.value)
    }


    const sendRequest = async (e) =>{
        e.preventDefault();
        
        if (email === '' || pass === ''){
            toast.error("Completa todos los campos " ,{duration: 1500,})
        }else{            
            const data = {email:email,password:pass}
            
            await axios.post('http://localhost:3000/user/login', data)
            .then(response => {                            
                dispatch(addUser(response.data))
                setEmail('')
                setPass('')
                navigate('/home')
            })
            .catch(error => {

                console.log(error)
                if(error.code !== "ERR_NETWORK"){
                    toast.error(error.response.data, { duration: 1500 });               
                }else{
                    toast.error("Por favor intente mas tarde", { duration: 1500 });               
                }
              
            });
        }
    }
   
    return (  
        <div className='container'>

            <Toaster
                position="top-center"
                reverseOrder={false}            
            />

            <div className="card">             

            <h1 className='tittle'>Bienvenido</h1>
            <LoginForm handlechangeemail={handlechangeemail} handlechangepassword={handlechangepassword} send={sendRequest}/>            

            <div className='container__message'>
                <Link className='login__create' to={'/register'}> No tienes una, Crea una Cuenta</Link>
            </div>

            </div>
            <img src={wave} alt=""  className='wave'/>
            
        </div>
        
    );
}

export default Login;