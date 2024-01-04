import { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    
    const restar = () => {
        if (contador > stock) {
            setContador(contador - 1)
        }
    }

    return (
        <div className="itemCount">
            <div className="controles">
                <button onClick={restar}>-</button>
                <p>{contador}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className="finalizar">
                Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount;