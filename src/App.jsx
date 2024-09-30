
import './App.css'
import AccordionSection from './Components/Accordion/AccordionSection'
import Formulario from './Components/FormSection/Formulario'
import Hero from './Components/Hero'
import MarketingSection from './Components/MarketingSection'
import PresupuestoSection from './Components/PresupuestoSection'
import Seccion2 from './Components/Seccion2'
import SectionProyects from './Components/SeccionCard/SectionProyects'
import ProyectsSection from './Components/SeccionProyects/ProyectsSection'
import ServiciosSection from './Components/Servicios/ServiciosSection'
import VideoSeccion from './Components/VideoSeccion'

function App() {

  return (
    <>
      <Hero />
      <Seccion2 />
      <VideoSeccion />
      <SectionProyects />
      <MarketingSection />
      <ProyectsSection />
      <PresupuestoSection />
      <ServiciosSection />
      <AccordionSection />
      <Formulario />
    </>
  )
}

export default App
