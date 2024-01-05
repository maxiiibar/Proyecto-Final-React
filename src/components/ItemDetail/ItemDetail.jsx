import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
/* import { CartContext } from "../../context/CartContext"; */

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  /* const { añadirProducto } = useContext(CartContext) */

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    /* añadirProducto(productoNuevo) */
    setToggle(true);
  };

  return (
    <div className="itemDetail">
      <div className="imagenDetail">
        <img src={producto.imagen} alt="Imagen" />
      </div>
      <div className="texto">
        <h2 className="nombreDetail">{producto.nombre}</h2>
        <h3 className="descripcionDetail">{producto.descripcion}</h3>
        <h4 className="envioDetail">
          {producto.envioGratis ? "Envío Gratis" : ""}
        </h4>
        <h3 className="precioDetail">${producto.precio}</h3>
        {toggle ? (
          <>
          <div className="botones-detail">
          <Link className="boton-detail" to="/carrito">Ir al carrito</Link>
          <Link className="boton-detail" to="/">Seguir comprando</Link>
          </div>
          </>
        ) : (
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
