import { useState } from "react";
import Form from "./Form";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
  }
  const enviarOrden = (event) => {
    event.preventDefault()
    console.log(datosForm)
  }
  return (
    <section>
      <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>
    </section>
  );
};

export default Checkout;
