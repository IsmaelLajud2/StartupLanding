import React from 'react'
import Accordion from './Accordion'
import '../Styles/AccordionStyles.css'
import 'aos/dist/aos.css'


const AccordionSection = () => {
    return (
        <section className='accordion-sectioncontainer'>
            <div className='accordion-sectionleft' data-aos="fade-right"
            >
                <Accordion />

            </div>
            <div className='accordion-sectionrigth' data-aos="fade-left"
            >
                <img className='imagen-accordion' src='Images/LaptopYestadisticas.png' alt='laptop' />
            </div>
        </section>
    )
}

export default AccordionSection