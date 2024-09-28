
import './App.css'
import Hero from './Components/Hero'
import MarketingSection from './Components/MarketingSection'
import PresupuestoSection from './Components/PresupuestoSection'
import Seccion2 from './Components/Seccion2'
import SectionProyects from './Components/SeccionCard/SectionProyects'
import ProyectsSection from './Components/SeccionProyects/ProyectsSection'
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
    </>
  )
}

export default App
