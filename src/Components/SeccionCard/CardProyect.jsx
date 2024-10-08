import React from 'react'
import '../SeccionCard/CardSectionStyles.css'
const CardProyect = ({ imagen, descripcion, titulo }) => {
  return (


    <section className='section-card'>
      <img src={imagen} className='imagen-card' />
      <div className='div-card'>
        <h1 className='titulo-card'>
          {titulo}
        </h1>
        <p className='description-card'>{descripcion}</p>
      </div>
    </section>
  )
}

export default CardProyect