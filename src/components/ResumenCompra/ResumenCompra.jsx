import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./ResumenCompra.css";

const ResumenCompra = () => {
  const { totalPrecio, totalEnvio, vaciarCarrito } = useContext(CartContext);

  return (
    <div className="total-recibo">
      <article className="contenedor-resumen">
        <h2>Resumen de compra</h2>
        <div className="total-producto">
          <p>Total productos:</p>
          <p>${totalPrecio()}</p>
        </div>
        {totalEnvio() == 0 ? (
          <p>Envío Gratis</p>
        ) : (
          <div className="total-envio">
            <p>Envío:</p>
            <p>${totalEnvio()}</p>
          </div>
        )}
        <div className="total">
          <h4>Total:</h4>
          <h4>${totalEnvio() + totalPrecio()}</h4>
        </div>
        <div className="boton-compra">
          <button onClick={vaciarCarrito} className="vaciar-carrito">Vaciar Carrito</button>
          <Link className="continuar-compra" to="/checkout">
            Continuar compra
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ResumenCompra;
