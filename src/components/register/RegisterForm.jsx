function RegisterForm(props) {
    return ( 

        <form onSubmit={props.send} className='register__form'>

        <input type="text" key={'name'} placeholder="Nombre" className='register__input ' onChange={props.handlechangename}/>
        <input type="email" key={"email"}  placeholder='Correo' className='register__input ' onChange={props.handlechangeemail}/>            
        <input type="password" key={"pass"}  placeholder='Contraseña' className='register__input ' onChange={props.handlechangepassword}/>

        <button className="register__button">  Registrarse </button>
        </form>   

     );
}

export default RegisterForm;