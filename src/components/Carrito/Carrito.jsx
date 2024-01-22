import { useContext } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import ResumenCompra from "../ResumenCompra/ResumenCompra";

import "./Carrito.css";

const Carrito = () => {
  const { carrito } = useContext(CartContext);
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

  if (carrito.length === 0) {
    return (
      <section className="contenedor-carrito-vacio">
        <article className="carrito-vacio">
          <h2>Ooppss el carrito esta vacio...</h2>
          <Link
            className="button-volver"
            style={estiloCard}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            to="/"
          >
            Volver al inicio
          </Link>
        </article>
      </section>
    );
  }

  return (
    <section className="seccion-carrito">
      <div className="contenedor-carrito">
        <div className="lista-items">
          {carrito.map((producto) => (
            <ItemCarrito producto={producto} key={producto.id} />
          ))}
        </div>
        <ResumenCompra />
      </div>
    </section>
  );
};

export default Carrito;
