import { useState } from "react";

const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  const [zoom, setZoom] = useState(false);
  const handleMouseOver = () => {
    setZoom(true);
  };
  const handleMouseLeave = () => {
    setZoom(false);
  };

  const estiloCard = {
    transform: zoom ? "scale(1.05)" : "scale(1.0)",
    transition: "transform 0.1s ease-in-out, boxShadow 0.1s ease-in-out",
    boxShadow: zoom && "2px 2px 10px 0.5px rgba(0, 0, 0, 0.2)",
    zIndex: zoom ? "9000" : "1",
    overflow: "hidden",
  };
  return (
    <form className="formOrden" onSubmit={enviarOrden} >
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} required />

      <label htmlFor="telefono">Teléfono</label>
      <input type="text" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} required />

      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' value={datosForm.email} onChange={guardarDatosInput} required />

      <label htmlFor="emailRepetido">Repetir Email</label>
      <input type="email" id='emailRepetido' name='emailRepetido' value={datosForm.emailRepetido} onChange={guardarDatosInput} required />

      <button style={estiloCard}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave} type='submit'>Enviar Orden</button>
    </form>
  )
}

export default Form