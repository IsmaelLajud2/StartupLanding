import React from 'react'
import Accordion from './Accordion'
import '../Styles/AccordionStyles.css'

const AccordionSection = () => {
    return (
        <section className='accordion-sectioncontainer'>
            <div className='accordion-sectionleft'>
                <Accordion />

            </div>
            <div className='accordion-sectionrigth'>
                <img className='imagen-accordion' src='Images/LaptopYestadisticas.png' alt='laptop' />
            </div>
        </section>
    )
}

export default AccordionSection