import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import '../Styles/StylesHero.css'
const Hero = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000
        })
      }, [])
  return (
    <main className='hero-main'>
    <header className='header-hero'>
   
        <div className='logo-container'>
<img src="Images/LogoStartup.png" className='logo-hero' />
        </div>
        <nav className='nav-hero' >
        <div className='services-container'>
                <ul className='nav-list'>
                    <li className='list-item-menu'>Marketing</li>
                    <li className='list-item-menu'>Branding</li>
                    <li className='list-item-menu'>Web</li>
                    <li className='list-item'>Proyectos</li>
                    <li className='list-item'>Contacto</li>
                </ul>
        </div>
    </nav>
   
    </header>
    <section className='section-hero'>
        <h1 className='hero-slogan' data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">Si no eres diferente,<br/>eres indiferente</h1>
<div className='hero-description' data-aos="fade-up"
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
