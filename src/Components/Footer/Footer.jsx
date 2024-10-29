import React, { useRef, useState } from 'react'
import '../Styles/FooterStyles.css'
import SocialMedia from './SocialMedia'
import 'aos/dist/aos.css'
import PhoneSvg from '../SVG/PhoneSVG'
import EmailSvg from '../SVG/EmailSVG'
import emailjs from '@emailjs/browser';




const Footer = () => {



    const [error, setError] = useState(false)
    const [succes, setSucces] = useState(false)

    const formRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_75l5m3e', 'template_waw8o0v', formRef.current, {
                publicKey: 'qXKTq5sqRYqCPKa5i',
            })
            .then(
                (result) => {
                    setSucces(true)
                },
                (error) => {
                    setError(true)
                },
            );
    };





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
                    <li className='servicelist-item' ><PhoneSvg style={{ paddingRight: "5px" }} /> 666-906-067</li>
                    <li className='servicelist-item'><EmailSvg /><a className='a-email' style={{ paddingLeft: "5px" }} href='mailto:ismael.lajud65@gmail.com'>ismael.lajud65@gmail.com

                    </a></li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer