import { useEffect } from 'react'
import './Styles/Seccion2Styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedNumber from './AnimatedNumber'
import { ScrollParallax } from 'react-just-parallax'



const Seccion2 = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
    <section className='section2container'>

      <section className="section-branding" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <ul className="branding-list">
          <li className="branding-item">MARKETING</li>
          <li className="branding-item">BRANDING</li>
          <li className="branding-item">DISEÑO</li>
          <li className="branding-item">WEB</li>
          <li className="branding-item">E-COMMERCE</li>
          <li className="branding-item">CONSULTORIA</li>
          <li className="branding-item">FUNNELS</li>
          <li className="branding-item">ADS</li>
          <li className="branding-item">SOCIALMEDIA</li>
          <li className="branding-item">AUDIOVISUAL</li>
        </ul>
      </section>
      <section className='section-info'>
        <aside className='aside-info'>
          <div className='div-title' >

            <h1 className='h1-title' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">Agencia de Marketing Digital</h1>
          </div>
          <div className='div-info'>
            <h3 className='h3-info' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <b>Escala tu negocio </b>con <br />
              Estrategias Ganadoras de <br></br>
              Marketing Digital
            </h3>
          </div>
          <div className='div-parrafo' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <p className='p-info'>Enfrentas desafíos únicos, pero también tienes oportunidades sin
              <br />precedentes para crecer y prosperar. Una de las herramientas más poderosas <br />
              a su disposición es el marketing digital. A través de estrategias efectivas y <br />
              bien ejecutadas, tu proyecto puede ampliar significativamente su alcance,<br />
              mejorar su imagen de marca y aumentar sus ventas.</p>
          </div>

        </aside>

      </section>
      <section className='section-description'>
        <aside className='aside-left'>
          <AnimatedNumber className="animated-number"></AnimatedNumber>
          <div className='wrapper'>
            <ScrollParallax strength={0.6}  >

              <img src="Images/LogoStartup.png" className='logo-parallax' />
            </ScrollParallax>
          </div>
        </aside>
        <aside className='aside-right'>
          <div className='div-box' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h5 className='h5-title'>Impulsamos tu negocio  hacia nuevas alturas.</h5>
            <p className='p-description'>
              Atrae, enamora y convierte a tus clientes potenciales
              en clientes satisfechos con nuestra sólida estrategia de
              Inbound Marketing. Te ayudaremos a construir
              relaciones duraderas con tu audiencia y a posicionar
              tu marca como un referente en tu industria.
            </p>
            <div className='div-number'>
              <span className='span-number'> 01</span>

            </div>
          </div>
          <div className='div-box' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h5 className='h5-title'>Convertimos tu marca en  una elección preferente.</h5>
            <p className='p-description' >
              Te ayudaremos a forjar una identidad única,
              a potenciar tus fortalezas y a capturar la atención de tu
              audiencia. Rompe con la indiferencia y conviértete en
              una marca que deja una huella imborrable en la
              <br />mente de tu público objetivo.
            </p>
            <div className='div-number' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <span className='span-number'> 02</span>

            </div>
          </div>
          <div className='div-box' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <h5 className='h5-title'>Creamos embudos de venta  irresistibles.</h5>
            <p className='p-description'>
              Optimizamos tu proceso de ventas y aumentamos tus
              conversiones con funnels de venta. Desde la captación
              hasta el cierre.
            </p>
            <div className='div-number' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom">
              <span className='span-number'> 03</span>

            </div>
          </div>


        </aside>


      </section>

    </section>

  )
}

export default Seccion2