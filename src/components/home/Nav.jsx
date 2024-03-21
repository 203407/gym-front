import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import '../../assets/css/nav.css'

function Nav(props) {    
    const navigate = useNavigate()

    const moveTOP = () => {        
        navigate('/profile')
    }

    const moveTOH = () => {        
        navigate('/home')
    }

    return (  
    <>
        <header className='header'>
            <nav className='nav__container'>

                <img src={logo} alt="logo" className='logo' onClick={()=>moveTOH()}/>
                

                <div className='ul__container'>
                    <ul className='ul__nav'>                    
                        <Link className={ props.pag == 1 ?  'nav__item selecte__item' : 'nav__item'} to='/calorias'>Calorias</Link>
                        <Link className={ props.pag == 2 ?  'nav__item selecte__item' : 'nav__item'} to='/rutinas'> Rutinas</Link>
                        <Link className={ props.pag == 3 ?  'nav__item selecte__item' : 'nav__item'} to='/culturistas'  >Culturistas</Link>
                    </ul>   
                </div>                

                <IconContext.Provider value={{ color: "white", className: "icon__provider" }}>
                    <CgProfile className='iconprofile' onClick={() => moveTOP()}/>
                </IconContext.Provider>
  
            </nav>
        </header>
    
    </>
    
    );
}

export default Nav;