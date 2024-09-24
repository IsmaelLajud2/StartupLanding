import '../Styles/MarketingStyles.css'
import 'aos/dist/aos.css'
const MarketingSection = () => {
    return (
        <section className="section-marketing">
            <div className='div-left'>
                <p className='p-title' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom"  >PLAN DE MARKETING DIGITAL AVANZADO</p>
                <h1 className='h1-marketing' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom">¿De que te sirve la visibilidad si lo que vendes no convence?</h1>

                <p className='p-horizontes' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom">Ya no vale todo ,tu compentencia es demasiado buena y el público objetivo al que te presentas
                    cada vez mas exigante.
                </p>
                <p className='p-horizontes' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom">
                    <strong>Expande tus horizontes:</strong> Digitaliza y activa los mecanismos para que te compren. El Programa de Marketing Digital Definitivo para impulsar tu Marca diseñado específicamente para Emprendedores y PYMES.
                    A través de diferentes fases estratégicas, te ayudaremos a destacar entre tu competencia y conquistar a tu público objetivo.
                </p>

                <div>
                    <button className='button-contacto' data-aos="fade-up" data-aos-duration="700" data-aos-anchor-placement="top-bottom">Contáctanos</button>
                </div>
            </div>
            <div className='div-right'>
                <div className='imagen-container' >


                    <img className='imagen-computer' alt='laptop' src='Images/LaptopHd.png' data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-duration="1000" ></img>
                    <p className='p-eslogan' data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-duration="1000">Transforma tu negocio con estrategias de Marketing Digital efectivas.</p>
                </div>
                <div className='slogan-marketing' data-aos-anchor-placement="top-bottom" data-aos="fade-up" data-aos-duration="1000">
                    <ul className='list-marketing'>
                        <li className='item-list'>- Diseño de <b>Webs a medida</b></li>
                        <li className='item-list'>- <b>Automatizacion</b> de procesos</li>
                        <li className='item-list'>-<b> Planificación</b> de Ventas</li>
                        <li className='item-list'>- Estratagia de <b>Marketing Digital</b></li>
                        <li className='item-list'>-<b> Analisas </b>de Procesos</li>
                        <li className='item-list'>-<b> Branding </b>y comunicacion</li>
                        <li className='item-list'>- Creacion de <b>Campañas</b></li>

                    </ul>
                </div>
            </div>

        </section >
    )
}

export default MarketingSection