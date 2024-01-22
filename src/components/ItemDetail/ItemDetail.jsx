import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirPrAlCarrito } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = { ...producto, cantidad: contador }
    añadirPrAlCarrito(productoNuevo)
    setToggle(true);
  };

  return (
    <article className="itemDetail">
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
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
