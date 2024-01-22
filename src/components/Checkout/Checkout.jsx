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

  return (
    <section className="checkout">
      {idOrden ? (
        <div>
          <h2>Orden generada exitosamente!!!</h2>
          <p>Código de ordén: {idOrden}</p>
          <Link className="boton-orden" to="/">Ver más productos</Link>
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
