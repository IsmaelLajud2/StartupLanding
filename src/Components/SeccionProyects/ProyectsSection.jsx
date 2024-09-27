import React from 'react'
import '../Styles/ProyectsStyles.css'
import CircleSVG from '../SVG/CircleSVG'
import CarouselProyects from './CarouselProyects'
const ProyectsSection = () => {
    return (
        <section className='section-container'>
            <div className='proyect-description'>

                <h1 className='h1-proyectos'>Proyectos</h1>

                <p className='p-proyectos'>
                    No hemos dejado de impulsar a <br />Emprendedores y PYMES en una amplia  <br /> variedad de nichos de mercado.
                </p>

                <p className='p-link'>
                    <CircleSVG /> ¿Hablamos?
                </p>

            </div>

            <CarouselProyects />

        </section>
    )
}

export default ProyectsSection