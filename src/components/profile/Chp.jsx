
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from "react-redux";
import axios from 'axios';
import '../../assets/css/chpassword.css'


function Chp() {
    const [pass,setPass] = useState('')
    const [newPass,setNewPass] = useState('')

    const token = useSelector((state) =>state.user.token ) 


    const handlePass = (e) =>{
        setPass(e.target.value)
    }

    const handleNewPass = (e) =>{        
        setNewPass(e.target.value)
    }

    const handleSubmit = async () => {
        console.log(pass)
        console.log(newPass)


        const data = {pass:pass,newpass:newPass}
            
        await axios.patch(import.meta.env.VITE_APIHOST+'/user/changepassword', data, {headers : {
            'Authorization': `Bearer ${token}`   
        }})
        .then(response => {                            
            
            setPass('')
            setNewPass('')            
            toast.success(response.data, { duration: 1500 });            
        })
        .catch(error => {
            toast.error(error.response.data, { duration: 1500 });                  
        });
            


    }

    return (
    <div className="main__container">
            <Toaster
                position="top-center"
                reverseOrder={false}            
            />
            <h1 className="ll">Cambiar contraseña</h1>

           
                
                <div className="card__white">
                    
                    <div className="text1">
                        <h4 className="label__text">Contraseña anterior</h4>
                        <input type="text" className="input__change" onChange={handlePass} value={pass}/>
                    </div>

                    <div className="text1">
                        <h4 className="label__text">Nueva contraseña</h4>
                        <input type="text"  className="input__change" onChange={handleNewPass} value={newPass}/>
                    </div>
                    
                    <button className="btn__ch" onClick={ () => handleSubmit()}>Actalizar</button>
                </div>
            
    </div> 
     );
}

export default Chp;