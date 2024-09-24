import '../SeccionCard/CardSectionStyles.css'
import { ScrollParallax } from "react-just-parallax";
import dataCard from '../SeccionCard/Cards.json'
import CardProyect from './CardProyect';
import 'aos/dist/aos.css'
import EyeSvg from '../SVG/EyeSvg';
const SectionProyects = () => {



  return (
    <section className='section-container'>
      <div className='text-container'>
        <h1 className='card-title'>
          Es Hora de
          <div className="parallax-wrapper">
            <ScrollParallax
              strength={-0.4}
              lerpEase={0.7}
            >
              <span className='paralax-text'>
                <b>Elevar tu Marca</b>
              </span>
            </ScrollParallax>
          </div>
        </h1>
      </div>
      <div className='card-container' data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine">
        {
          dataCard.proyectos.map((servicio, index) => {


            return (

              <CardProyect key={index} imagen={servicio.imagen} descripcion={servicio.descripcion} titulo={servicio.titulo} ></CardProyect>
            )
          })

        }
      </div>
      <section className='section-icon' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" >
        <span className='span-icon' ><EyeSvg></EyeSvg></span> <p className='p-icon'> Quiero ver más servicios</p>
      </section>
    </section>
  );
};

export default SectionProyects;
