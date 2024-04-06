import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import '../../assets/css/nav.css'
import Logg from './Logg';
import NotLogg from './NotLogg';


function Nav(props) {    
    const navigate = useNavigate()   

    
    const moveTOH = () => {        
        navigate('/')
    }
    
    return (  
    <>
        <header className='header'>
          
            <nav className= 'nav__container'    >
                <img src={logo} alt="logo" className='logo' onClick={()=>moveTOH()}/>
                                                

                <div className='ul__container'>
                    <ul className='ul__nav'>                    
                        <Link className={ props.pag == 1 ?  'nav__item selecte__item' : 'nav__item'} to='/calorias'>Calorias</Link>
                        <Link className={ props.pag == 2 ?  'nav__item selecte__item' : 'nav__item'} to='/rutinas'> Rutinas</Link>
                        <Link className={ props.pag == 3 ?  'nav__item selecte__item' : 'nav__item'} to='/culturistas'  >Culturistas</Link>
                    </ul>   
                </div>                

                {
                    props.logg ? <Logg/> : <NotLogg/>
                }

                
  
            </nav>
        </header>
    
    </>
    
    );
}

export default Nav;