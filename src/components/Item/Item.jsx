import { Link } from "react-router-dom";
import { useState } from "react";
import "./Item.css";

const Item = ({producto}) => {
  const [zoom, setZoom] = useState(false)

  const handleMouseOver = () => {
    setZoom(true)
  }
  const handleMouseLeave = () => {
    setZoom(false)
  }

  const estiloCard = {
    transform: zoom ? 'scale(1.1)' : 'scale(1.0)',
    transition: 'transform 0.2s ease-in-out'
  }
  return (
    <div className="item" style={estiloCard} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <div className="imagen">
            <img src={producto.imagen} alt="Imagen" />
        </div>
        <p className="nombreProducto">{producto.nombre}</p>
        <p className="precioProducto">${producto.precio}</p>
        <p className="envioProducto">{(producto.envioGratis) ? "Envío Gratis" : ""}</p>
        <Link to={`/detalle/${producto.id}`} className="link" >Ver detalles</Link>
    </div>
  )
}

export default Item