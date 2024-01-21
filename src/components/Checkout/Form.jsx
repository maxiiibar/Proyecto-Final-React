import React from 'react'

const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <form onSubmit={enviarOrden} >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosInput} />
        
        <label htmlFor="telefono">Telefono</label>
        <input type="text" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosInput} />
        
        <label htmlFor="email">Email</label>
        <input type="text" id='email' name='email' value={datosForm.email} onChange={guardarDatosInput} />

        <button type='submit'>Enviar Orden</button>
    </form>
  )
}

export default Form