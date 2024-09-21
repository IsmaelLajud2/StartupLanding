import { useState, useEffect, useRef } from 'react';
import '../Styles/Seccion2Styles.css';

const AnimatedNumber = () => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad
  const numberRef = useRef(null); // Referencia al elemento del DOM

  // Intersection Observer para detectar cuándo el elemento es visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true); // Activa la animación cuando el componente es visible
      } else {
        setIsVisible(false); // Puedes decidir detener o no la animación
      }
    }, { threshold: 0.5 }); // El 50% del elemento debe ser visible

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  // Controla el incremento del número cuando el componente es visible
  useEffect(() => {
    let interval;
    if (isVisible && number === 0) { // Solo si es visible y el número aún es 0
      interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber < 10) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 200);
    }

    return () => clearInterval(interval); // Limpiar el intervalo cuando sea necesario
  }, [isVisible]);

  return (
    <div ref={numberRef} style={{ fontSize: "70px", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "flex-start", fontWeight: "500", marginTop: "20%", paddingBottom: "20px" }}>
      {number}
      <p className='p-left'>AÑOS <br /> DE <br /> TRAYECTORÍA</p>
    </div>
  );
};

export default AnimatedNumber;
