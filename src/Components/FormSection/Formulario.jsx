import React, { useState, useRef } from 'react'
import '../Styles/FormStyles.css'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

const Formulario = () => {




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
        <section className='container-form'>
            <div className='form-text' data-aos="fade-down"
                data-aos-offset="100">
                <p className='form-p'>IMPULSAMOS TU NEGOCIO </p>
                <h1 className='h1-form'>INNOVEMOS JUNTOS</h1>
                <p className='form-article'>Forma parte de nuestro equipo y comienza a transformar el futuro de tu negocio. Juntos, lograremos que tu marca no solo destaque, sino que sea memorable. Si deseas más información sobre Marketing Digital, Diseño Web, Branding o Publicidad, no dudes en contactarnos. Estamos aquí para ayudarte y resolver todas tus inquietudes</p>
            </div>
            <div className='marketing-videocontainer' data-aos="fade-right"
                data-aos-offset="100">
                <video className='marketing-video' autoPlay muted loop  >
                    <source src='Images/Videos/VideoMarketing.mp4' type="video/mp4" />

                </video>
                <div className='form-container' data-aos="fade-left"
                    data-aos-offset="100"
                >


                    <form ref={formRef} className='form-field' onSubmit={sendEmail}>

                        <input className='input-name' type="text" required id='name' name='name' placeholder='' />
                        <label htmlFor='name' className='name-label' >Nombre</label>


                        <input className='input-email' type="email" required id="email" name='email' placeholder='' />
                        <label htmlFor='email' className='email-label'>Email</label>

                        <input className='input-number' type="number" required id="number" name='number' placeholder='' />
                        <label htmlFor='number' className='number-label'>Numero de Telefono</label>

                        <textarea className='text-tarea' name="message" id="comentarios" placeholder=''></textarea>
                        <label htmlFor='comentarios' className='text-tarealabel'>Comentarios</label>
                        <button type='submit' className='form-button'>Enviar</button>
                        {error && <div style={{ color: "red" }}>Error al enviar el correo</div>}
                        {succes && <div style={{ color: "green" }}>¡Correo enviado exitosamente,Gracias por contactar!</div>}
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Formulario