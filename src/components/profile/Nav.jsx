import {  NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import logo from '../../assets/img/logo.png'
import '../../assets/css/navprofile.css'



function Nav(props) {
    const navigate = useNavigate()
    const user = useSelector((state) =>state.user)


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
                        {/* <NavLink className={ props.pag == 1 ?  'nav__item selecte__item' : 'nav__item'} to='/chpass'>Cambiar contraseña</NavLink> */}
                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/chpass' onClick={()=> props.change()}>Cambiar contraseña</NavLink>
                        </div>
                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/rutine' onClick={()=> props.change()}>Mis rutinas</NavLink>
                        </div>

                        <div className="container__link">
                            <NavLink className={ ({isActive})=>{return isActive ? 'nav__itemw selecte__item': 'nav__itemw'}} to='/profile/culrutista' onClick={()=> props.change()}>Mis Culturistas</NavLink>
                        </div>
                        
                        {/* <NavLink className={ props.pag == 2 ?  'nav__item selecte__item' : 'nav__item'} to='/addrutine' >Agregar rutinas</NavLink> */}
                        {/* <NavLink className={ props.pag == 3 ?  'nav__item selecte__item' : 'nav__item'} to='/addcul' >Agregar culturistas</NavLink> */}
                        {/* <NavLink className={ props.pag == 4 ?  'nav__item selecte__item' : 'nav__item'} to='/home' >Inciio</NavLink> */}
                    </ul>   
                </div>                
            </nav>
        </aside>
    
        </>

      );
}

export default Nav;<>


</>