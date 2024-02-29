import wave from '../assets/img/wave.svg'

import '../assets/css/home.css'
import Nav from '../components/home/Nav';
import Footer from '../components/home/Footer';
import H from '../assets/img/h.png'


function Home() {
    return ( 
        <div className="home__container">
            <Nav pag={0} />
                <div className='container__home'>
                    <h1 className='title__home' >
                        Estamos para ayudarte <br/>
                        a ponerte más grande
                    </h1>

                    <img src={H} alt="home"  className='home__img'/>
                </div>
                {/* <img src={wave} alt=""  className='wave__home'/> */}
            <Footer st={1} />
        </div>
     );
}

export default Home;