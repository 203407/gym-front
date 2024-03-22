import Nav from '../components/home/Nav';
import '../assets/css/culturistas.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardCulturista from '../components/culturistas/CardCulturista';

import Footer from '../components/home/Footer';
function Culturistas() {

    const token = useSelector((state) =>state.user.token )
    const [culturistas,setCulturistas] = useState([])
    
    useEffect(()=>{

        axios.get(import.meta.env.VITE_APIHOST+'/culturist', 
        {headers : {
            'Authorization': `Bearer ${token}`   
        }})
        .then(response => {                          
            setCulturistas(response.data)            
        })
        .catch(error => {
    
        });

    },[])

    return ( 
        <div className="">
            <Nav pag={3}/>
            <div className='card__culturistas'>
                <h1 className='titlte__culturistas'>Culturistas</h1>
            </div>

            {
                culturistas.map(element => (
                    <CardCulturista key={element.id} picture={element.picture} name={element.name}  nameuser={element.nameuser} weight={element.weight}  height={element.height} competitions={element.competitions}/>                                        
                ))

            }

            
        {
            culturistas.length > 0 ? <Footer/> :null
        }           
        </div>
     );
}

export default Culturistas;
