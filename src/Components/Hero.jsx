
import 'aos/dist/aos.css'

import '../Styles/StylesHero.css'
const Hero = () => {

   
  return (
    <main className='hero-main'>
    <header className='header-hero'>
   
        <div className='logo-container' data-aos="fade-down"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
<img src="Images/LogoStartup.png" className='logo-hero' />
        </div>
        <nav className='nav-hero' >
        <div className='services-container'>
                <ul className='nav-list' >
                 

                
                    <li className='list-item-menu'  data-aos="fade-right"
     data-aos-offset="200"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine">Marketing</li>
                    <li className='list-item-menu'data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">Branding</li>
                    <li className='list-item-menu' data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">Web</li>
                   
                    <li className='list-item' data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">Proyectos</li>
                    <li className='list-item' data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">Kit Digital</li>
                    <li className='list-item' data-aos="fade-left"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">Contacto</li>
                </ul>
        </div>
    </nav>
   
    </header>
    <section className='section-hero'>
        <h1 className='hero-slogan' data-aos="fade-down" data-aos-duration="1500"
     data-aos-anchor-placement="top-bottom">Si no eres diferente,<br/>eres indiferente</h1>
<div className='hero-description' data-aos="fade-up" data-aos-duration="1500"
     data-aos-anchor-placement="center-bottom">
<button className='hero-button'>
    QUIERO VER MÁS
     </button>
     <p className='p-hero'>
        La Agencia de Marketing Digital,<br/>que se adapta a tus necesidades.
     </p>
     </div>
     </section>
 
    </main>
    
  )
}

export default Hero
