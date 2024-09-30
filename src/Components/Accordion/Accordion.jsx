import React, { useState } from 'react'
import info from "../Accordion/AccordionInfo.json"
import '../Styles/AccordionStyles.css'
import { ChevronDown } from 'react-feather'
const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        setSelected(selected === i ? null : i);
    };
    return (
        <div className='wrapper'>
            <div className='accordion'>

                {
                    info.servicios.map((item, i) => (
                        <div className={`item ${selected === i ? 'active' : ''}`} key={i}>
                            <div className='accordion-title' onClick={() => toggle(i)}><h2>{item.title}</h2><span className='accordion-icon'>
                                {selected === i ? <ChevronDown /> : <ChevronDown />}</span></div>
                            <div className={selected === i ? "content-show" : "accordion-content"}>{item.info}</div>
                        </div>
                    ))


                }
            </div>

        </div>
    )
}

export default Accordion