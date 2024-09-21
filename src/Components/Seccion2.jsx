import { useEffect } from 'react'
import '../Styles/Seccion2Styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AnimatedNumber from './AnimatedNumber'



const Seccion2 = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  return (
   <section className='section2container'>
    
        <section className="section-branding"  data-aos="fade-up"
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

            <h1 className='h1-title'>Agencia de Marketing Digital</h1>
            </div>
            <div className='div-info'>
          <h3 className='h3-info' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
          <b>Escala tu negocio </b>con <br/>
            Estrategias Ganadoras de <br></br>
            Marketing Digital
          </h3>
            </div>  
            <div className='div-parrafo' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
             <p className='p-info'>Enfrentas desafíos únicos, pero también tienes oportunidades sin 
          <br/>precedentes para crecer y prosperar. Una de las herramientas más poderosas <br/>
              a su disposición es el marketing digital. A través de estrategias efectivas y <br/>
              bien ejecutadas, tu proyecto puede ampliar significativamente su alcance,<br/>
              mejorar su imagen de marca y aumentar sus ventas.</p>
            </div>

          </aside>
         
        </section>
        <section className='section-description'>
          <aside className='aside-left'>
    <AnimatedNumber className="animated-number"></AnimatedNumber>
       
          </aside>
        <aside className='aside-right'>
            <div className='div-box' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <h5 className='h5-title'>Impulsamos tu negocio <br/> hacia nuevas alturas.</h5>
              <p className='p-description'>
              Atrae, enamora y convierte a tus clientes potenciales <br/>
              en clientes satisfechos con nuestra sólida estrategia de <br/>
              Inbound Marketing. Te ayudaremos a construir <br/>
              relaciones duraderas con tu audiencia y a posicionar <br/>
              tu marca como un referente en tu industria.
              </p>
              <div className='div-number'>
              <span className='span-number'> 01</span>

              </div>
              </div>
              <div className='div-box' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <h5 className='h5-title'>Convertimos tu marca en <br/> una elección preferente.</h5>
              <p className='p-description' >
              Te ayudaremos a forjar una identidad única, a <br/> 
              potenciar tus fortalezas y a capturar la atención de tu <br/>
              audiencia. Rompe con la indiferencia y conviértete en <br/>
              una marca que deja una huella imborrable en la 
          <br/>mente de tu público objetivo.
              </p>
              <div className='div-number' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <span className='span-number'> 02</span>

              </div>
                </div>
                <div className='div-box' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              <h5 className='h5-title'>Creamos embudos de venta <br/> irresistibles.</h5>
              <p className='p-description'>
              Optimizamos tu proceso de ventas y aumentamos tus  <br/>
              conversiones con funnels de venta. Desde la captación <br/>
              hasta el cierre, diseñaremos un recorrido que impulse <br/>
              a tus clientes hacia la acción.
              </p>
              <div className='div-number'  data-aos="fade-up"
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