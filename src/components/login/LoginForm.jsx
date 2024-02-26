function LoginForm(props) {
    return (                  
            <form onSubmit={props.send} className='form'>

            <input type="email" key={"email"}  placeholder='Correo' className='login__input' onChange={props.handlechangeemail}/>            

            <input type="password" key={"pass"}  placeholder='Contraseña' className='login__input' onChange={props.handlechangepassword}/>

            <button className="login__button">  Entrar </button>
            </form>              
    );        
}

export default LoginForm;