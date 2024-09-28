import React from 'react'
import '../Styles/ServiciosStyles.css'
const CardsServicios = ({ icon, title }) => {
    return (
        <div className='servicios-card'>
            <div className='card-icon'>
                <span className='card-svg'>{icon}</span>
            </div>
            <p className='p-cardtitle'>{title}</p>
        </div>
    )
}

export default CardsServicios