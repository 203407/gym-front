import {  NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import '../../assets/css/navprofile.css'



function Nav(props) {
    const navigate = useNavigate()    


    const moveTOH = () => {        
        navigate('/home')
    }


    return (

        <>
        <aside className='profile__header'> 
            <nav className='profile__nav__container'>

                <img src={logo} alt="logo" className='profile__logo' onClick={()=>moveTOH()}/>                

                <div className='profile__ul__container'>
                    <ul className='profile__ul__nav'>                                            
                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/chpass' onClick={()=> props.change()}>Cambiar contraseña</NavLink>
                        </div>
                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/rutine' onClick={()=> props.change()}>Mis rutinas</NavLink>
                        </div>

                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/culrutista' onClick={()=> props.change()}>Mis Culturistas</NavLink>
                        </div>
                                                
                    </ul>   
                </div>                
            </nav>
        </aside>
    
        </>

      );
}

export default Nav;