import { useState } from "react";

import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };
  const handleMouseLeave = () => {
    setZoom(false);
  };

  const estiloCard = {
    transform: zoom ? "scale(1.1)" : "scale(1.0)",
    transition: "transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out",
    boxShadow: zoom ? "4px 4px 15px 1px rgba(0, 0, 0, 0.4)" : "2px 2px 10px 0.5px rgba(0, 0, 0, 0.2)",
    zIndex: zoom ? "9000" : "1",
    overflow: "hidden",
  };

  return (
    <article
      className="item"
      style={estiloCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="imagen">
        <img src={producto.imagen} alt="Imagen" />
      </div>
      <div className="contenido">
        <p className="nombreProducto">{producto.nombre}</p>
        <p className="precioProducto">${producto.precio}</p>
        <p className="envioProducto">
          {producto.envio === 0 ? "Envío Gratis" : "Envío: $" + producto.envio}
        </p>
        <Link to={`/detalle/${producto.id}`} className="link">
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

export default Item;
