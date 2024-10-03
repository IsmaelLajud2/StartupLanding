import React from 'react'
import '../Styles/FooterStyles.css'
import SocialMedia from './SocialMedia'
import 'aos/dist/aos.css'


const Footer = () => {
    return (
        <footer className='footer-section' >
            <div className='footer-logo' data-aos="fade-right"
                data-aos-offset="100" >
                <img className='logo-footer' src="Images/LogoStartup.png" alt="" />
                <SocialMedia />
            </div>


            <div className='footer-info' data-aos="fade-left"
                data-aos-offset="100">



                <ul className='service-list'><span className='ul-title'> SERVICIOS</span>
                    <li className='servicelist-item'>Marketing</li>
                    <li className='servicelist-item'>e-Commerce</li>
                    <li className='servicelist-item'>Diseño Web</li>
                    <li className='servicelist-item'>Branding</li>
                    <li className='servicelist-item'>Consultoría</li>

                </ul>


                <ul className='service-list'><span className='ul-title'>INFORMACIÓN </span>
                    <li className='servicelist-item'>Presupuestos</li>
                    <li className='servicelist-item'>Proyectos</li>
                    <li className='servicelist-item'>Blog</li>
                    <li className='servicelist-item'>Conócenos</li>
                </ul>


                <ul className='service-list'><span className='ul-title'>CONTACTO</span>
                    <li className='servicelist-item'>666-906-067</li>
                    <li className='servicelist-item'>ismael.lajud65@gmail.com</li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer