import React from 'react'
import '../Styles/ProyectsStyles.css'
import CircleSVG from '../SVG/CircleSVG'
import CarouselProyects from './CarouselProyects'
import 'aos/dist/aos.css'

const ProyectsSection = () => {
    return (
        <section className='section-container'>
            <div className='proyect-description'>

                <h1 className='h1-proyectos' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine">Proyectos</h1>

                <p className='p-proyectos' data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine">
                    No hemos dejado de impulsar a <br />Emprendedores y PYMES en una amplia  <br /> variedad de nichos de mercado.
                </p>

                <p className='p-link' data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine">
                    <CircleSVG /> ¿Hablamos?
                </p>

            </div>

            <CarouselProyects />

        </section>
    )
}

export default ProyectsSection