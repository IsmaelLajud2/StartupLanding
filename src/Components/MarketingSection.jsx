import '../Styles/MarketingStyles.css'
const MarketingSection = () => {
    return (
        <section className="section-marketing">
            <div className='div-left'>
                <p className='p-title'>Plan de marketin Avanzado</p>
                <h1 className='h1-marketing'>¿De que te sirve la visibilidad si lo que vendes no convence?</h1>

                <p className='p-horizontes'>Ya no vale todo ,tu compentencia es demasiado buena y el público objetivo al que te presentas
                    cada vez mas exigante.
                </p>
                <p className='p-horizontes'>
                    <strong>Expande tus horizontes:</strong> Digitaliza y activa los mecanismos para que te compren. El Programa de Marketing Digital Definitivo para impulsar tu Marca diseñado específicamente para Emprendedores y PYMES.
                    A través de diferentes fases estratégicas, te ayudaremos a destacar entre tu competencia y conquistar a tu público objetivo.
                </p>

                <div>
                    <button className='button-contacto'>Contactanos</button>
                </div>
            </div>
            <div className='div-right'>
                <div className='imagen-container'>
                    <img className='imagen-computer' src='/Images/Cards/CardFondo2.png'></img>

                </div>
            </div>

        </section>
    )
}

export default MarketingSection