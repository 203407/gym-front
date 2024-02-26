function RegisterForm(props) {
    return ( 

        <form onSubmit={props.send} className='form'>

        <input type="text" key={'name'} placeholder="Nombre" className='login__input register' onChange={props.handlechangename}/>
        <input type="email" key={"email"}  placeholder='Correo' className='login__input register' onChange={props.handlechangeemail}/>            
        <input type="password" key={"pass"}  placeholder='Contraseña' className='login__input register' onChange={props.handlechangepassword}/>

        <button className="login__button">  Registrarse </button>
        </form>   

     );
}

export default RegisterForm;