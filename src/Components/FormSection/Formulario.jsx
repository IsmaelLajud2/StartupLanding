import React from 'react'
import '../Styles/FormStyles.css'

const Formulario = () => {
    return (
        <section className='container-form'>
            <div className='form-text'>
                <p className='form-p'>IMPULSAMOS TU NEGOCIO </p>
                <h1 className='h1-form'>INNOVEMOS JUNTOS</h1>
                <p className='form-article'>Forma parte de nuestro equipo y comienza a transformar el futuro de tu negocio. Juntos, lograremos que tu marca no solo destaque, sino que sea memorable. Si deseas más información sobre Marketing Digital, Diseño Web, Branding o Publicidad, no dudes en contactarnos. Estamos aquí para ayudarte y resolver todas tus inquietudes</p>
            </div>
            <div className='marketing-videocontainer'>
                <video className='marketing-video' autoPlay muted loop  >
                    <source src='Images/Videos/VideoMarketing.mp4' type="video/mp4" />

                </video>
                <form>
                    <label >
                        <input type="text" />
                    </label>
                </form>
            </div>
        </section>
    )
}

export default Formulario