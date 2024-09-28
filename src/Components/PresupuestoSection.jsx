import React from 'react'
import './Styles/PresupuestoStyles.css'
import 'aos/dist/aos.css'


const PresupuestoSection = () => {
    return (
        <section className='section-presupuesto'>
            <div className='container-left' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >
                <img className='imagen' src='Images/LaptopFlotanteImagen.png'></img>
            </div>
            <div className='container-right'>
                <p className='p-title-presupuesto' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >Contactános sin compromiso para tu presupuesto de Marketing</p>
                <h1 className='h1-presupuesto' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >Nosotros sí hablamos de precios</h1>
                <p className='p-contacto' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >
                    Solicita tu presupuesto personalizado ahora mismo y selecciona los servicios que mejor se adapten a las necesidades de tu negocio. Si tienes algún requerimiento especial o necesitas funciones adicionales, no dudes en ponerte en contacto con nosotros. Un experto estará encantado de atenderte y estudiar tu caso a fondo.
                </p>
                <button className='button-presupuesto' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >
                    OBTÉN TU PRESUPUESTO
                </button>
            </div>
        </section>
    )
}

export default PresupuestoSection