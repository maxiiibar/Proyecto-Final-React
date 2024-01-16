import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './ResumenCompra.css'

const ResumenCompra = () => {
  const { totalPrecio, totalEnvio } = useContext(CartContext);

  return (
    <div className="total-recibo">
      <article className="contenedor-resumen">
      <h2>Resumen de compra</h2>
      <p>Total productos: ${totalPrecio()}</p>
      {totalEnvio() == 0 ? <p>Envío Gratis</p> : <p>Envío: ${totalEnvio()}</p>}
      <h4>Total: ${totalEnvio() + totalPrecio()} </h4>
      <button>Continuar compra</button>
    </article>
    </div>
    
  );
};

export default ResumenCompra;
