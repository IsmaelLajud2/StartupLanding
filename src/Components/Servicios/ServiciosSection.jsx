import React from 'react'
import serviciosData from './ServiciosData'
import '../Styles/ServiciosStyles.css'
import CardsServicios from './CardsServicios'
import 'aos/dist/aos.css'

const ServiciosSection = () => {
    return (
        <section className='servicios-container'>
            <div className='title-container'>
                <p className='p-servicios' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >NUESTROS SERVICIOS </p>
                <h1 className='h1-proyectamos'>¿Proyectamos?</h1>
            </div>
            <div className='container-section'>


                <div className='cardservicios-container' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom" >

                    {
                        serviciosData.map((servicio, index) => (
                            <CardsServicios key={index} icon={servicio.icon} title={servicio.title} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiciosSection