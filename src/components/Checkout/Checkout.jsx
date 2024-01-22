import { useContext, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import db from "../../db/db";
import Form from "./Form";

import "./Checkout.css";

const Checkout = () => {
  const { carrito, totalPrecio, vaciarCarrito } = useContext(CartContext);

  const [idOrden, setIdOrden] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: "",
  });

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };
      subirOrden(orden);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los emails deben ser iguales",
      });
    }
  };

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden)
      .then((respuesta) => {
        setIdOrden(respuesta.id);
        vaciarCarrito();
      })
      .catch((error) => console.log(error));
  };

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
    <section className="checkout">
      {idOrden ? (
        <div className="ordenGenerada">
          <h2>Orden generada exitosamente!!!</h2>
          <div className="codigoOrden">
            <p>Código de ordén:</p>
            <span>{idOrden}</span>
          </div>
          <Link className="boton-orden" style={estiloCard}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave} to="/">Ver más productos</Link>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </section>
  );
};

export default Checkout;
