import { useState, useEffect, useRef } from 'react';
import '../Styles/Seccion2Styles.css';

const AnimatedNumber = () => {
  const [number, setNumber] = useState(0); // Estado que controla el número
  const [isVisible, setIsVisible] = useState(false); // Estado que controla la visibilidad del componente
  const numberRef = useRef(null); // Referencia al elemento del DOM

  // Intersection Observer para detectar cuándo el componente es visible
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // Obtiene la primera entrada (porque solo observamos un elemento)
      if (entry.isIntersecting) { // Si el elemento es visible en el viewport
        setIsVisible(true); // Cambia el estado a visible
      } else {
        setIsVisible(false); // Cambia el estado a no visible cuando sale del viewport
      }
    }, { threshold: 0.5 }); // El 50% del elemento debe estar visible

    if (numberRef.current) {
      observer.observe(numberRef.current); // Comienza a observar el elemento referenciado
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current); // Deja de observar el elemento cuando se desmonta
      }
    };
  }, []);

  // Controla el incremento del número cuando el componente es visible
  useEffect(() => {
    let interval; // Definir la variable de intervalo
    if (isVisible) {
      setNumber(0); // Reinicia el número a 0 cuando el componente es visible
      interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber < 10) {
            return prevNumber + 1; // Incrementa el número si es menor a 10
          } else {
            clearInterval(interval); // Detiene el intervalo cuando llega a 10
            return prevNumber; // Mantiene el número en 10
          }
        });
      }, 200); // Incrementa el número cada 200 milisegundos
    }

    return () => clearInterval(interval); // Limpia el intervalo si el componente deja de ser visible
  }, [isVisible]);

  return (
    <div
      ref={numberRef} // Referencia del elemento DOM
      style={{
        fontSize: "70px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontWeight: "500",
        marginTop: "20%",
        paddingBottom: "20px",
      }}
    >
      {number}
      <p className="p-left">AÑOS <br /> DE <br /> TRAYECTORÍA</p>
    </div>
  );
};

export default AnimatedNumber;
