import Nav from '../components/home/Nav';
import '../assets/css/calorias.css'
import factor from '../assets/img/factor.png'
import Footer from '../components/home/Footer'; 
import { useEffect,useState } from 'react';
import {useSelector} from 'react-redux'

import { checkToken } from '../checkToken/checkToken';
import {useDispatch} from 'react-redux'
import toast, {Toaster} from 'react-hot-toast'


function Calorias() {

    const user = useSelector((state) =>state.user )        
    const [logg,setLogg] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        if(user.token == ''){            
            setLogg(false)
        }else{                  
            const statusToken = checkToken(user.time,dispatch )
            
            if (statusToken){
                toast.error('La sesion ha caducado', {duration:1000})
            }

            setLogg(true)                                                  
        }
    },[user])

    return (  
        <div className="calorias">
            <Nav pag={1} logg={logg}/>
            <Toaster
                    position="top-center"
                    reverseOrder={false}            
                />
            <div className="card__calorias ">
                <h1 className='titlte'>Calorias</h1>
            </div>
            

            <div className="card__calorias  what">
                <h1 className='titlte'>¿Qué son las calorias?</h1>

                <p className='parrafo__calorias'>
                <br /><br /><br />                
                Las calorías miden la energía que nos proporciona un alimento o una bebida a partir de los carbohidratos, las grasas, las proteínas y el alcohol que contienen.
                <br />
                <br />
                Nuestro cuerpo hace uso de las calorías de los alimentos en diferentes procesos, tales como en la producción de calor o para almacenarlas en forma de grasa2. Es decir, nuestro cuerpo usa cierta cantidad de calorías por día para darnos energía y, aquellas que no utiliza a lo largo del día, las almacena a través de la grasa.
                </p>
            </div>


            <div className="card__calorias ">
                <h1 className='titlte'>¿Como calcular las calorias de mantenimiento?</h1>
                
                <ul className='first__ul'>
                    <li>Consumes las mismas calorías que quemas </li>
                    <li>mantienes el peso</li>
                </ul>

                <div className='container__factor'>
                    <img src={factor} alt=""  className='img__factor'/>    
                </div>                
                
                <p className='parrafo'>
                    Primero tienes que tomar tu peso
                    <br />
                    Despues en base a la tabla realziar el siguiente calculo
                </p>

                <div className='text__centrado'>
                    <h3>
                        Calorias M = peso corporal  x  Factor de actividad 
                    </h3>            
                </div>

                <h3 className='subtitle'>Ejemplo:</h3>

                <div className='text__centrado'>
                    <h3>CM = 70 kg x 1.7 = 119 calorias de mantenimiento</h3>
                </div>
            </div>


            <div className="card__calorias ">
                <h1 className='titlte'>Volumen</h1>
                <br /><br />
                <p>
                Si decides entrar en un volumen lo que tienes que hacer es aumentar la ingesta de   calorias diarias. <br />
                Lo comun es aumentar de 200 a 500 calorias mas de ingesta.
                </p>
            </div>



            <div className="card__calorias  last">
                <h1 className='titlte'>Definicion</h1>
                <br /><br />
                <p>
                Para realziar una definicion lo que se debe de hacer es un déficit calórico.Por lo   general es reducir en 300 a 500 calorias las de mantenimiento.
                </p>
            </div>

        <Footer/>
            
        </div>
    );
}

export default Calorias;