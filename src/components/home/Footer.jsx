import logo from '../../assets/img/logo.png'
import t from '../../assets/img/t.png'
import f from '../../assets/img/f.png'
import i from '../../assets/img/i.png'

import '../../assets/css/footer.css'

const moveTOH = () => {        
    navigate('/home')
}


function Footer(props) {
    return ( 
    <footer className={props.st === 1 ? 'footer__home footer__home__change' : 'footer__home footer__other'}   >
        
        <img src={logo} alt="logo" className='logo' onClick={()=>moveTOH()}/>

        <ul className='footer__ul'>            
            <a href="http://instragram.com" target='_blank' className='item__footer' > <img src={i} alt="instragram logo" className='footer__img' /></a>
            <a href="http://facebook.com"   target='_blank' className='item__footer'> <img src={f} alt="facebook logo"  className='footer__img'/></a>
            <a href="https://twitter.com/"  target='_blank' className='item__footer'> <img src={t} alt="twitter logo" className='footer__img' /></a>
        </ul>

    </footer>
    );
}

export default Footer;